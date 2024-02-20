import { TouchableOpacity } from "react-native";
import { BoxCard, BoxCircle, CancelBox, Circle, ContainerShadowConsultas, DataUser, TextBox, TimeBox } from "../Container/Style"
import { ImageCard } from "../Image/Image";
import { TextBlue, TextGrayRegular, TextGraySemiBold, TextRed, TitleBlack } from "../Title/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonText, TextBold } from "./Style";


export const CardPaciente = ({
    name,
    age,
    type,
    time,
    situacao,
    onPressCancel,
    onPressAppointment

}) => {
    return (
        <ContainerShadowConsultas>
            <BoxCard>
                <ImageCard
                    source={require('../../../src/assets/img/ImageCard.png')}
                />
                <DataUser>
                    <TextBox>
                        <TitleBlack>{name}</TitleBlack>

                        <BoxCircle>
                            <TextGrayRegular>{age}</TextGrayRegular>
                            <Circle></Circle>
                            <TextGraySemiBold>{type}</TextGraySemiBold>
                        </BoxCircle>

                    </TextBox>
                    <CancelBox>
                        <TimeBox situacao={situacao}>
                            <MaterialCommunityIcons name="clock" size={14} color={situacao == 'pendente' ? "#49B3BA" : "#4E4B59"} />
                            <TextBold situacao={situacao} color={'#49B3BA'}>{time}</TextBold>
                        </TimeBox>

                        {
                            situacao == 'cancelado' ? (
                                <></>
                            ) : situacao == 'pendente' ?
                            (
                            <TouchableOpacity situacao={situacao}>
                            <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </TouchableOpacity>
                            ): (
                                <TouchableOpacity situacao={situacao}>
                                <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
                                </TouchableOpacity>
                            )
                        }
                    </CancelBox>
                </DataUser>
            </BoxCard>
        </ContainerShadowConsultas>
    )
}