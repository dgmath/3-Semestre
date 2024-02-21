import { Modal } from "react-native"
import { TitleBlack } from "../Title/Style"
import { ButtonTitle } from "../Button/Style"
import { ButtonAppointmentSecondary, ButtonModalAppointment, ImageModal, ModalAge, ModalAppointmentContent, ModalContentText, ModalEmail, PatientModalAppointment } from "./Styled"
import { ButtonSecondaryText } from "../CancelattionModal/Style"

export const AppointmentModal = ({
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
                    <ButtonModalAppointment>
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