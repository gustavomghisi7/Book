import styled from 'styled-components/native';

Container, Nome, Preco, CenterView, Button, ButtonText

export const Container = styled.View`
    padding: 20px;
    border-radius: 5px;
    background: #FFF;
    margin-bottom: 15px;
`;

export const Nome = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Preco = styled.Text`
    font-size: 17px;
    font-style: italic;
`;

export const CenterView = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
    background: #00AAFF;
    width: 70px;
    align-items: center;
    padding: 5px;
    margin-right: 15px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 12px;
`;