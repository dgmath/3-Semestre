import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    border: solid 1px #496BBA;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`
export const ButtonPerfil = styled(Button)`
    width: 80%;
    margin-bottom: 10px;
`
export const ButtonGray = styled(Button)`
    width: 50%;
    background-color: #ACABB7;
    border: solid 1px #ACABB7;
`
export const ButtonGrayP = styled(Button)`
    width: 80%;
    background-color: #ACABB7;
    border: solid 1px #ACABB7;
`

export const ButtonCadastro = styled(Button)`
    margin-top: 24px;
`

export const ButtonTitle = styled.Text`
    color: #FAFAFA;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
`
export const ButtonGoogle = styled(Button)`
    flex-direction: row;
    background-color: #ffff;
    margin-top: 24px;
    margin-bottom: 16px;
    border-color: #ffff;
    justify-content: center;
`

export const ButtonGoogleTitle = styled(ButtonTitle)`
    color: #496BBA;
    margin-left: 29px;
`;

export const ButtonCad = styled.TouchableOpacity`
    width: 28%;
    height: 39px;
    background-color: #496BBA;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`
export const ButtonCadWhite = styled(ButtonCad)`
    background-color: #FBFBFB;
    border: 2px solid #607EC5;
`
export const ButtonTextCad = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FBFBFB;
    font-size: 12px;
`
export const ButtonTextCadBlue = styled(ButtonTextCad)`
    font-family: 'MontserratAlternates_600SemiBold';
    color: #607EC5;
    font-size: 12px;
`