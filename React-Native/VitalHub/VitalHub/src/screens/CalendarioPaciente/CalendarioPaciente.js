import { useState } from "react"
import { ButtonTitle } from "../../components/Button/Style"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { ButtonModal, ButtonSecondary, ButtonSecondaryText } from "../../components/CancelattionModal/Style"
import { TitleBlackDoctor } from "../../components/CardMedico/Style"
import { ModalSubtitle2 } from "../../components/ConsultModal/Style"
import { ClinicContent, ContainerClinica, InputContent } from "../../components/Container/Style"
import InputSelect from "../../components/InputSelect/InputSelect"
import { ModalConsulta } from "../../components/AppointmentModal/ModalConsulta/ModalConsulta"

export const CalendarioPaciente = ({navigation}) => {

    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return(
        <ContainerClinica>
        <ClinicContent>
            <TitleBlackDoctor>Selecionar data</TitleBlackDoctor>

            <CalendarComponent
                // minDate={"5"}
            />
            <InputContent>
            <ModalSubtitle2>Selecione um horário disponível</ModalSubtitle2>
            <InputSelect/>
            </InputContent>
            

            {/* Botão */}
            <ButtonModal onPress={() => setShowModalAppointment(true)}>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>

            <ButtonSecondary onPress={() => navigation.navigate('SelecionarMedico')}>
                <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
            </ButtonSecondary>
        </ClinicContent>

        <ModalConsulta
                navigation={navigation}
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
        />
    </ContainerClinica>
    )
}