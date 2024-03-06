
import { BoxInput } from "../../components/BoxInput/Index"
import { ContainerLabel, ContainerPerfil, ContainerShadow, ShadowContent } from "../../components/Container/Style"
import { ImagePerfil } from "../../components/Image/Image"
import { Subtitle, TitleBlack } from "../../components/Title/Style"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { ButtonGray, ButtonPerfil, ButtonTitle } from "../../components/Button/Style"
//<MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />

export const PerfilMedico = () => {
    return (
       <ScrollForm>
        <ContainerPerfil>
            <ImagePerfil
                source={require('../../../src/assets/img/ImagePrescricao.png')}
                resizeMode='cover'
            >

                <ContainerShadow>
                    <TitleBlack>Dr. Claudio</TitleBlack>
                    <ShadowContent>
                        {/* <Subtitle>Cliníco geral</Subtitle> */}
                        <Subtitle>CRM-15286</Subtitle>
                    </ShadowContent>
                </ContainerShadow>
            </ImagePerfil>

            <BoxInput
                textLabel='Data de Nascimento'
                placeholder='04/05/1999'
                keyboardType='numeric'
                maxLength={10}
                editable={true}
                fieldWidth={80}
            />
            <BoxInput
                textLabel='CPF'
                placeholder='859********'
                keyboardType='numeric'
                maxLength={14}
                editable={true}
                fieldWidth={80}
            />
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

            <ButtonPerfil>
                <ButtonTitle>SALVAR</ButtonTitle>
            </ButtonPerfil>
            <ButtonPerfil>
                <ButtonTitle>EDITAR</ButtonTitle>
            </ButtonPerfil>
        </ContainerPerfil>
        </ScrollForm> 
    )
}