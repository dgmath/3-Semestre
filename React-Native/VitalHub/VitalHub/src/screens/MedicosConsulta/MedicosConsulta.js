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
import { ListComponent } from "../../components/List/List";
import { Footer, FooterBtn } from "../../components/Footer/Footer";
import { ContainerFooter } from "../../components/Footer/Style";
// import { TextGray, UserName } from "../../components/Title/Style"

const Consultas = [
    {id: 1, nome: 'Carlos', situacao: "pendente"},
    {id: 2, nome: 'Carlos', situacao: "realizado"},
    {id: 3, nome: 'Carlos', situacao: "cancelado"},
    {id: 4, nome: 'Carlos', situacao: "realizado"},
    {id: 5, nome: 'Carlos', situacao: "cancelado"},
]

export const MedicosConsulta = () => {

    const [statusLista, setStatusLista] = useState("realizado")
    return(
        // <ScrollForm>
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

                        <ListComponent
                    
                            data={Consultas}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) =>
                        statusLista == item.situacao && (
                        <CardPaciente
                            name={'Catarina'}
                            age={'17 anos'}
                            type={'Rotina'}
                            time={'14:00'}
                            situacao={item.situacao}
                            />)}
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
                <Footer
                
                />
            </ContainerConsulta>
        // </ScrollForm>
    )
}