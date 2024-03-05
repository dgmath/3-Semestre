import { Modal } from "react-native"
import { ButtonAppointment,  ButtonModalAppointmentClinic, ModalAppointmentContentConsult, ModalConsultContentText, PatientModalAppointment, TextModalCalendar } from "../Styled"
import { ButtonSecondaryText } from "../../CancelattionModal/Style"
import { InputLabel2 } from "../../Label/Style"
import { TextBlack, TitleBlack } from "../../Title/Style"
import { ButtonTitle } from "../../Button/Style"
export const ModalConsulta = ({
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
                <ModalAppointmentContentConsult>

                    {/* Titulo */}
                    <TitleBlack>Agendar consulta</TitleBlack>

                    <TextBlack>Consulte os dados selecionados para a sua consulta</TextBlack>

                    {/* Descrição */}
                    <ModalConsultContentText>
                        <InputLabel2>Data da consulta</InputLabel2>
                        <TextModalCalendar>1 de Novembro de 2023</TextModalCalendar>
                    </ModalConsultContentText>

                    <ModalConsultContentText>
                        <InputLabel2>Médico(a) da consulta</InputLabel2>
                        <TextModalCalendar>Dra Alessandra</TextModalCalendar>
                        <TextModalCalendar>Demartologa, Esteticista</TextModalCalendar>
                    </ModalConsultContentText>

                    <ModalConsultContentText>
                        <InputLabel2>Local da consulta</InputLabel2>
                        <TextModalCalendar>São Paulo, SP</TextModalCalendar>
                    </ModalConsultContentText>

                    <ModalConsultContentText>
                        <InputLabel2>Tipo da consulta</InputLabel2>
                        <TextModalCalendar>Rotina</TextModalCalendar>
                    </ModalConsultContentText>

                     {/* Botão */}
                    <ButtonModalAppointmentClinic onPress={() => navigation.navigate('Main') || setShowModalAppointment(false)}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModalAppointmentClinic>

                    <ButtonAppointment onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonAppointment> 

                </ModalAppointmentContentConsult>
            </PatientModalAppointment>
        </Modal>
    )
}