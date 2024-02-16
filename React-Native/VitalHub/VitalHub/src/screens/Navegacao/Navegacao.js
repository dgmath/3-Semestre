import { Button, View } from "react-native";

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Verifique seu email"
                onPress={() => navigation.navigate('VerifiqueEmail')}
            />
            <Button
                title="Nova senha"
                onPress={() => navigation.navigate('NovaSenha')}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate('Perfil')}
            />
            <Button
                title="Prontuario"
                onPress={() => navigation.navigate('Prontuario')}
            />
            <Button
                title="Consultas"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}