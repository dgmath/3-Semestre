import { useState } from "react";
import  CalendarList from "../../components/Calendar/Index";
import { BoxCard, BoxCircle, CancelBox, Circle, ContainerButton, ContainerConsulta, ContainerShadowConsultas, DataUser, TextBox, TimeBox } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header";
import { ImageCard } from "../../components/Image/Image"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { TextBlue, TextGrayRegular, TextGraySemiBold, TextRed, TitleBlack } from "../../components/Title/Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonCadastro } from "../../components/ButtonCadastro/ButtonCadastro";
import { CardPaciente } from "../../components/Paciente/Paciente";
// import { TextGray, UserName } from "../../components/Title/Style"



export const MedicosConsulta = () => {

    const [statusLista, setStatusLista] = useState("pendente")
    return(
        <ScrollForm>
            <ContainerConsulta>
                    <Header/>

                    <CalendarList/>

                    <ContainerButton>
                        <ButtonCadastro
                            textButton={"Agendadas"}
                            clickButton= {statusLista === "pendente"}
                            onPress={() => setStatusLista("pendente")}
                        />
                        <ButtonCadastro
                            textButton={"Realizadas"}
                            clickButton= {statusLista === "realizado"}
                            onPress={() => setStatusLista("realizado")}

                        />
                        <ButtonCadastro
                            textButton={"Canceladas"}
                            clickButton= {statusLista === "cancelado"}
                            onPress={() => setStatusLista("cancelado")}

                        />
                    </ContainerButton>

                    <CardPaciente
                        name={'Catarina'}
                        age={'17'}
                        type={'Rotina'}
                        time={'14:00'}
                    />
                    {/* <ContainerShadowConsultas>
                        <BoxCard>
                            <ImageCard
                                source={require('../../../src/assets/img/ImageCard.png')}
                            />
                            <DataUser>
                                <TextBox>
                                        <TitleBlack>Niccole Sarga</TitleBlack>

                                        <BoxCircle>
                                        <TextGrayRegular>22 Anos</TextGrayRegular>
                                        <Circle></Circle>
                                        <TextGraySemiBold>Rotina</TextGraySemiBold>
                                        </BoxCircle>

                                </TextBox>
                                <CancelBox>
                                    <TimeBox>
                                            <MaterialCommunityIcons name="clock" size={14} color="#49B3BA" />
                                            <TextBlue>14:00</TextBlue>
                                    </TimeBox>
                                    <TextRed>Cancelar</TextRed>
                                </CancelBox>
                            </DataUser>
                        </BoxCard>
                    </ContainerShadowConsultas> */}
                    
            </ContainerConsulta>
        </ScrollForm>
    )
}