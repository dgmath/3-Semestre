import { Text, Image } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Button, ButtonTitle, ButtonGoogle, ButtonGoogleTitle } from "../../components/Button/Style"
import { LinkMedium, LinkMediumBlue } from "../../components/LinkMedium/Style"
import { ContentAccount } from "../../components/ContentAccount/Style"
import { TextAccount } from "../../components/TextAccount/Style"
import { AntDesign } from '@expo/vector-icons';
// import { useState } from "react"

// import axios from "axios"

export const Login = ({ navigation }) => {

    async function Login() {
 
                navigation.replace('Main') 
            
       
        // else email === 'Doutor' && senha === '1234'
        // {
        //     return(
        //         navigation.replace('MainM')
        //     )
        // }
    
    }

    // const [email, setEmail] = useState('')
    // const [senha, setSenha] = useState('')
    return (
        <Container>

            <Logo
                source={require('../../../src/assets/img/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder={'Usuário ou E-mail'}
                // value={email}
                // onChangeText={(txt) => setEmail(txt)}
            />

            <Input
                placeholder={'Senha'}
                // value={senha}
                // onChangeText={(txt) => setSenha(txt)}
                keyBoardType={'password'}
            />

            <LinkMedium onPress={() => navigation.replace('EsqueceuSenha')}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={(e) => Login()}>
                <ButtonTitle>entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign
                    name="google"
                    size={20} color='#496BBA'
                />
                <ButtonGoogleTitle>entrar com Google</ButtonGoogleTitle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <LinkMediumBlue onPress={() => navigation.replace('Cadastro')}>Crie uma conta agora!</LinkMediumBlue></TextAccount>
            </ContentAccount>

        </Container>
    )
}