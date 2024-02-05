import styled from "styled-components";

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FECC2B;
    height: 20%;
    /* border-bottom-left-radius: 15px ;
    border-bottom-right-radius: 15px ; */
    border-radius: 0px 0px 15px 15px;
    box-shadow:  0px 0px 15px #00000030;

    /* Box shadow para android */
    /* shadowColor: 'black';
    shadowOpacity: 0.26;
    shadowOffset: 2px 2px;
    shadowRadius: 10;
    elevation: 3; */
`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 30px;
`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
    color: #333E33;
`