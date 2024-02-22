import styled from "styled-components";

export const TextBold = styled.Text`
 font-size: 14px;
 font-family: 'Quicksand_500Medium';
 color: ${(props) => props.situacao == 'pendente' ? '#49B3BA' : "#4E4B59"};
 
 
 `
 export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat_500Medium';
  color: ${(props) => props.situacao == 'pendente' ? '#C81D25' : "#344F8F"};
 `

export const ButtonCancel = styled.TouchableOpacity`
    width: 60px;
`
export const IconContent = styled.View`
    flex-direction: row;
`
export const TextGold = styled.Text`
     font-size: 14px;
     font-family: 'Quicksand_600SemiBold';
     color: #F9A620;
`

export const ModalSubtitle = styled.Text`
    font-size: 14px;
    color: #000000;
    /* line-height: 22px; */
    align-self: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: Quicksand_600SemiBold;
`