import { BoxInput } from "../../components/BoxInput/Index"
import { ButtonSecondary, ButtonSecondaryText } from "../../components/CancelattionModal/Style"
import { ContainerLabel, ContainerPerfil } from "../../components/Container/Style"
import { ImagePerfil, ImagePerfil2 } from "../../components/Image/Image"
import { TextGray, TitleBlack2 } from "../../components/Title/Style"

export const Mapa = ({navigation}) => {
    return (
       
        <ContainerPerfil>
            <ImagePerfil2
                source={require('../../../src/assets/img/Mapa.png')}
                resizeMode='cover'
            />

            <TitleBlack2>Clínica Natureh</TitleBlack2>
            <TextGray>São Paulo, SP</TextGray>

            <BoxInput
                textLabel='Endereço'
                placeholder='Rua Vicenso Silva, 987'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
            />
            <ContainerLabel>


            <BoxInput
                textLabel='Cep'
                placeholder='06548-909'
                keyboardType='numeric'
                maxLength={9}
                editable={true}
                fieldWidth={45}
            />
            <BoxInput
                textLabel='Cidade'
                placeholder='Moema-SP'
                keyboardType='default'
                maxLength={20}
                editable={true}
                fieldWidth={45}
            />
            </ContainerLabel>
            
            <ButtonSecondary onPress={() => navigation.navigate('Main')}>
                <ButtonSecondaryText>Voltar</ButtonSecondaryText>
            </ButtonSecondary>

        </ContainerPerfil>
        
    )
}



{/* <ContainerLabel>

    <BoxInput
        textLabel='Cep'
        placeholder='06548-909'
        keyboardType='numeric'
        maxLength={9}
        editable={true}
        fieldWidth={45}
    />
    <BoxInput
        textLabel='Cidade'
        placeholder='Moema-SP'
        keyboardType='default'
        maxLength={20}
        editable={true}
        fieldWidth={45}
    />
</ContainerLabel> */}
