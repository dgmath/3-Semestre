import styled from "styled-components"
import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkCancel, LinkMedium } from "../../components/LinkMedium/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"
import { AntDesign } from '@expo/vector-icons';

export const EsqueceuSenha = ({navigation}) => {
    return(
        <Container>
        <AntDesign onPress={() => navigation.navigate('Login')} style={{alignSelf: "flex-start", paddingTop: 30, paddingLeft: 20}} name="arrowleft" size={24} color="#FFFFFF" />
        <Logo
        source={require('../../../src/assets/img/VitalHub_Logo.png')}
        />
        <Title>Recuperar Senha</Title>
        <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

        <Input
         placeholder={'Usuário ou E-mail'}
         />

         <Button onPress={() => navigation.replace('VerifiqueEmail')}>
            <ButtonTitle>Continuar</ButtonTitle>
         </Button>

         <LinkCancel onPress={() => navigation.navigate('Login')}>Cancelar</LinkCancel>

    </Container>
    )
}