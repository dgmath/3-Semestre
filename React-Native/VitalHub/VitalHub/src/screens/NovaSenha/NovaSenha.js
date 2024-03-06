import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { InputSenha } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"
import { AntDesign } from '@expo/vector-icons';

export const NovaSenha = ({navigation}) => {
    return(
        <Container>
        <AntDesign onPress={() => navigation.navigate('VerifiqueEmail')} style={{alignSelf: "flex-start", paddingTop: 30, paddingLeft: 20}} name="close" size={24} color="#FFFFFF" />

            <Logo
                source={require('../../../src/assets/img/VitalHub_Logo.png')}
            />

            <Title>Redefinir senha</Title>
            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <InputSenha
                placeholder='Nova senha'
            />
            <InputSenha
                placeholder='Confirmar nova senha'
            />

            <Button onPress={() => navigation.replace('Login')}>
                <ButtonTitle>confirmar nova senha</ButtonTitle>
            </Button>
        </Container>
    )
}