import { ButtonCadStyle, ButtonTextCad } from "./Style"


export const ButtonCadastro = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonCadStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextCad clickButton={clickButton}> {textButton} </ButtonTextCad>
        </ButtonCadStyle>
    )
}