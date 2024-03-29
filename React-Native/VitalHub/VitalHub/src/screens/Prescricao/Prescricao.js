
import { BoxInput } from "../../components/BoxInput/Index"
import { ContainerFoto, ContainerLabel, ContainerPerfil, ContainerShadow, Separator, ShadowContent } from "../../components/Container/Style"
import { ImagePerfil } from "../../components/Image/Image"
import { Subtitle, TextFoto, TextRed, TextRed2, TitleBlack } from "../../components/Title/Style"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { ButtonAppointment, ButtonSecondaryText } from "../../components/AppointmentModal/Styled"
import { InputLabel3 } from "../../components/Label/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonCamera, TextButtonCamera } from "../../components/Button/Style"
import { CameraExpo } from "../../components/Camera/Camera"
import { useState } from "react"
import { Image } from "react-native"


//<MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
// state uricamera capture
// passar no modal que mudara o valor



export const Prescricao = ({ navigation }) => {

    const [showCameraModal, setShowCameraModal] = useState(false)
    const [cameraCapture, setCameraCapture] = useState(null)

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
                            <Subtitle>Cliníco geral</Subtitle>
                            <Subtitle>CRM-15286</Subtitle>
                        </ShadowContent>
                    </ContainerShadow>
                </ImagePerfil>

                <BoxInput
                    textLabel='Descrição da consulta'
                    placeholder='O paciente possuí uma infecção no 
                ouvido. Necessário repouse de 2 dias
                 e acompanhamento médico constante'
                    keyboardType='numeric'
                    maxLength={100}
                    editable={true}
                    fieldWidth={80}
                    customHeight={121}
                    customP={25}
                    multiline={true}
                    numberOfLines={2}
                />
                <BoxInput
                    textLabel='Diagnóstico do paciente'
                    placeholder='Infecção no ouvido'
                    keyboardType='numeric'
                    maxLength={14}
                    editable={true}
                    fieldWidth={80}
                />
                <BoxInput
                    textLabel='Prescrição médica'
                    placeholder='Medicamento: Advil
                Dosagem: 50 mg
                Frequência: 3 vezes ao dia
                Duração: 3 dias'
                    keyboardType='default'
                    maxLength={100}
                    editable={true}
                    fieldWidth={80}
                    multiline={true}
                    numberOfLines={4}
                    customHeight={133}
                    customP={25}
                />

                <InputLabel3>Exames médicos</InputLabel3>


                <ContainerFoto>
                    {cameraCapture == null ? (
                        <>
                            <MaterialCommunityIcons name="file-alert-outline" size={24} color="#4E4B59" />
                            <TextFoto>Nenhuma foto informada</TextFoto>
                        </>
                    )
                        : (
                            <>
                                <Image style={{ width: '100%', height: 120, borderRadius: 5 }}
                                    source={{ uri: cameraCapture }}
                                />
                            </>

                        )}

                </ContainerFoto>

                <ContainerLabel>
                    <ButtonCamera onPress={() => setShowCameraModal(true)}>
                        <TextButtonCamera>
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                        </TextButtonCamera>
                        <TextButtonCamera>
                            enviar
                        </TextButtonCamera>
                    </ButtonCamera>
                    <TextRed2 onPress={() => setCameraCapture(null)}>Cancelar</TextRed2>
                </ContainerLabel>

                <Separator></Separator>

                <BoxInput
                    placeholder='Resultado do exame de sangue : 
                tudo normal'
                    keyboardType='default'
                    maxLength={100}
                    editable={true}
                    fieldWidth={80}
                    multiline={true}
                    numberOfLines={2}
                    customHeight={103}
                    customP={25}
                />

                <ButtonAppointment onPress={() => navigation.replace('Main')}>
                    <ButtonSecondaryText>Voltar</ButtonSecondaryText>
                </ButtonAppointment>


                <CameraExpo
                    visible={showCameraModal}
                    setShowCameraModal={setShowCameraModal}
                    setCameraCapture={setCameraCapture}
                />
            </ContainerPerfil>
        </ScrollForm>


    )
}