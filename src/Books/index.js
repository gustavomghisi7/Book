import React from 'react';
import { Container, Nome, Preco, CenterView, Button, ButtonText } from './styles';

export default function Books({ data, editar, excluir }) {
  return (
    <Container>
      <Nome>{data.nome}</Nome>
      <Preco>R$ {data.preco}</Preco>

      <CenterView>
        <Button onPress={ () => editar(data) }>
          <ButtonText>Editar</ButtonText>
        </Button>

        <Button onPress={ () => excluir(data) }>
          <ButtonText>Excluir</ButtonText>
        </Button>
      </CenterView>
    </Container>
  );
}