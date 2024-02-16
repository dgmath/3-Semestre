import { ButtonCad, ButtonCadWhite, ButtonTextCad, ButtonTextCadBlue } from "../../components/Button/Style";
import CalendarList from "../../components/Calendar/Index";
import { BoxCircle, BoxUser, Circle, ContainerButton, ContainerConsulta, ContainerShadowConsultas, DataUser, TextBox } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header";
import { ImageCard, ImageHeader } from "../../components/Image/Image"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { TextGrayRegular, TextGraySemiBold, TitleBlack } from "../../components/Title/Style";
// import { TextGray, UserName } from "../../components/Title/Style"



export const MedicosConsulta = () => {
    return(
        <ScrollForm>
            <ContainerConsulta>
                    <Header/>

                    <CalendarList/>

                    <ContainerButton>
                        <ButtonCad>
                            <ButtonTextCad>
                                Agendados
                            </ButtonTextCad>
                        </ButtonCad>
                        <ButtonCadWhite>
                            <ButtonTextCadBlue>
                                Realizadas
                            </ButtonTextCadBlue>
                        </ButtonCadWhite>
                        <ButtonCadWhite>
                            <ButtonTextCadBlue>
                                Canceladas
                            </ButtonTextCadBlue>
                        </ButtonCadWhite>
                    </ContainerButton>

                    <ContainerShadowConsultas>
                        <BoxUser>
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
                            </DataUser>
                        </BoxUser>
                    </ContainerShadowConsultas>
                    
            </ContainerConsulta>
        </ScrollForm>
    )
}