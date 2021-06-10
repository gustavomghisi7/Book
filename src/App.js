import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { Container, Logo, Title, Input, CenterView, Button, ButtonText, List } from './styles';
import Books from './Books';
import getRealm from './services/realm';

export default function book() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [books, setBooks] = useState('');
    const [disabledBtn, setDisabledBtn] = useState(false);

    useEffect( () => {
        loadBooks = async() => {
            const realm = await getRealm();
            const data = realm.objects('Book');
            setBooks(data);
        }

        loadBooks();
    }, []);

    saveBook = async (data) => {
        const realm = await getRealm();

        //Id auto increment
        const id = realm.objects('Book').sorted('id', true).length > 0
        ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

        const dadosLivro = {
            id: id,
            nome: data.nome,
            preco: data.preco
        }

        realm.write( () => {
            realm.create ('Book', dadosLivro)
        });
    }

    addBook = async (data) => {
        if (nome === '' || preco === '') {
            alert('Preencha todos os campos.');
            return;
        }

        try {
            const data = { nome: nome, preco: preco };
            await saveBook(data);
    
            setNome('');
            setPreco('');
            Keyboard.dismiss();

        } catch (err){
            alert(err);
        }
    }

    function editarBook(data){
        setNome(data.nome);
        setPreco(data.preco);
        setIdEdit(data.id);
        setDisabledBtn(true);
    }

    editBook = async () => {
        if (idEdit === null) {
            alert('Você não pode editar!');
            return;
        }

        const realm = await getRealm();
        const response = {
            id: idEdit,
            nome: nome,
            preco: preco
        };

        await realm.write( () => {
            realm.create('Book', response, 'modified')
        });

        const dadosAlterados = await realm.objects('Book').sorted('id', false);
            setBooks(dadosAlterados);
            setNome('');
            setPreco('');
            setIdEdit('');
            setDisabledBtn(false);
            Keyboard.dismiss();
    }

    excluirBook = async (data) => {
        const realm = await getRealm();
        const ID = data.id;

        realm.write( () => {
            if(realm.objects('Book').filtered('id ='+ID).length > 0){
                realm.delete(
                    realm.objects('Book').filtered('id ='+ID)
                )
            }
        })

        const livrosAtuais = await realm.objects('Book').sorted('id', false);
        setBooks(livrosAtuais);
    }

    return (
        <Container>
            <Logo>Próximos Livros</Logo>

            <Title>Nome</Title>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                value={nome}
                onChangeText={ (text) => setNome(text) }
            />

            <Title>Preço</Title>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                value={preco}
                onChangeText={ (text) => setPreco(text) }
            />

            <CenterView>
                <Button
                    onPress={ addBook }
                    disabled={disabledBtn}
                    style={{opacity: disabledBtn ? 0.1 : 1}}
                >
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
                <Button onPress={ editBook }>
                    <ButtonText>Editar</ButtonText>
                </Button>
            </CenterView>

            <List
                showsVerticalScrollIndicator={false}
                KeyboardShouldPersistTaps="handled"
                data={books}
                keyExtractor={ item => String(item.id) }
                renderItem={ ({ item }) => (<Books data={item} editar={editarBook} excluir={excluirBook} />)}
            />
        </Container>
    );
}
