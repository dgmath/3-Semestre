import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;
    border-bottom-left-radius: 15px ;
    border-bottom-right-radius: 15px ;
    box-shadow:  0px 0px 4px rgba(0, 0, 0, 15);
`

export const HeaderContent = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_400Regular';
    color: #333E33;
`