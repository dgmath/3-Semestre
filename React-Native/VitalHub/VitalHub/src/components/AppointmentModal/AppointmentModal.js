import { Modal } from "react-native"
import { TextBlack, TitleBlack } from "../Title/Style"
import { ButtonTitle } from "../Button/Style"
import { ButtonAppointment, ButtonAppointmentSecondary, ButtonModalAppointment, ButtonModalAppointmentClinic, ImageModal, ModalAge, ModalAppointmentContent, ModalAppointmentContentConsult, ModalConsultContentText, ModalContentText, ModalEmail, PatientModalAppointment, TextModalCalendar } from "./Styled"
import { ButtonSecondaryText } from "../CancelattionModal/Style"
import { InputLabel, InputLabel2 } from "../Label/Style"

export const AppointmentModal = ({
    navigation,
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {

    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModalAppointment>
                {/* Content */}
                <ModalAppointmentContent>

                    <ImageModal
                        source={require('../../../src/assets/img/ImageModal.png')}
                    />

                    {/* Titulo */}
                    <TitleBlack>Niccole Sarga</TitleBlack>

                    {/* Descrição */}
                    <ModalContentText>
                        <ModalAge>22 anos</ModalAge>
                        <ModalEmail>niccole.sarga@gmail.com</ModalEmail>
                    </ModalContentText>

                     {/* Botão */}
                    <ButtonModalAppointment onPress={() => navigation.navigate('Prontuario') || setShowModalAppointment(false)}>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModalAppointment>

                    <ButtonAppointmentSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonAppointmentSecondary> 

                </ModalAppointmentContent>
            </PatientModalAppointment>
        </Modal>
    )
}
export const AppointmentModalPaciente = ({
    navigation,
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModalAppointment>
                {/* Content */}
                <ModalAppointmentContent>

                    <ImageModal
                        source={require('../../../src/assets/img/ImageModalPaciente.png')}
                    />

                    {/* Titulo */}
                    <TitleBlack>Dr. Claudio</TitleBlack>

                    {/* Descrição */}
                    <ModalContentText>
                        <ModalAge>Cliníco geral</ModalAge>
                        <ModalEmail>CRM-15286</ModalEmail>
                    </ModalContentText>

                     {/* Botão */}
                    <ButtonModalAppointment onPress={() => navigation.navigate('Mapa') || setShowModalAppointment(false)}>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </ButtonModalAppointment>

                    <ButtonAppointmentSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonAppointmentSecondary> 

                </ModalAppointmentContent>
            </PatientModalAppointment>
        </Modal>
    )
}
