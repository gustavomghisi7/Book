import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #00AAFF;
    padding-top: 45px;
`;

export const Logo = styled.Text`
    font-size: 30px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 20px;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #AACCFF;
`;

export const Input = styled.TextInput`
    height: 40px;
    margin-left: 15px;
    margin-bottom: 5px;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #FFF;
`;

export const CenterView = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    background-color: blue;
    height: 40px;
    width: 120px;
    border-radius: 5px;
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
    font-size: 17px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 }
})`
    margin-top: 20px;
`;