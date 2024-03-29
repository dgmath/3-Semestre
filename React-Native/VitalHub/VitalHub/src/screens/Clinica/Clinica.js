import { useState } from "react"
import { ButtonTitle } from "../../components/Button/Style"
import { ButtonModal, ButtonSecondary, ButtonSecondaryText } from "../../components/CancelattionModal/Style"
import { CardClinic } from "../../components/CardClinic/CardClinic"
import { ListClinic } from "../../components/CardClinic/Style"
import { TitleBlackBold } from "../../components/ConsultModal/Style"
import { ClinicContent, ContainerClinica } from "../../components/Container/Style"



export const Clinica = ({ navigation, setShowModalConsult}) => {
    const SelecionarClinica = [
        {id: 1, nome: 'Clinica',                     
        name:'Clínica Natureh',
        rated:'4,5',
        time:'Seg-Sex',
        city: 'São Paulo, SP',
        border: '#496BBA'},
    
        {id: 2, nome: 'Clinica',                     
        name:'Diamond Pró-Mulher',
        rated:'4,8',
        time:'Seg-Sex',
        border:'transparent',
        city:'São Paulo, SP',
        border: 'transparent' },
    
        {id: 3, nome: 'Clinica',                     
        name:'Clinica Villa Lobos',
        rated:'4,2',
        time:'Seg-Sab',
        border:'transparent',
        city:'Taboão, SP',
        border: 'transparent' },
    
        {id: 4, nome: 'Clinica',                     
        name:'SP Oncologia Clínica',
        rated:'4,2',
        time:'Seg-Sab',
        border:'transparent',
        city:'Taboão, SP',
        border: 'transparent'},
    ]

    const [borderColor, setBorderColor] = useState(null)
    // const [showModalConsult, setShowModalConsult] = useState(false)
    return (
        <ContainerClinica>
            <ClinicContent>
                <TitleBlackBold>Selecionar clínica</TitleBlackBold>
                <ListClinic
                    //nome da constante com dados
                    data={SelecionarClinica}
                    //ldefinindo quem sera a key do seu item na constante
                    keyExtractor={(item) => item.id}
                    //O que vai ser mostrado
                    renderItem={({item}) =>
                         (
                        <CardClinic
                            clickButton={item.id == borderColor}
                            onPress={() => setBorderColor(item.id)}
                            name={item.name}
                            rated={item.rated}
                            time={item.time}
                            city={item.city}
                        />
                        )}
                />
                {/* Botão */}
                <ButtonModal onPress={() => navigation.replace('SelecionarMedico')}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </ButtonModal>

                <ButtonSecondary onPress={() => navigation.replace('Main') && setShowModalConsult(true)}>
                    <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                </ButtonSecondary>
            </ClinicContent>
        </ContainerClinica>
    )
}