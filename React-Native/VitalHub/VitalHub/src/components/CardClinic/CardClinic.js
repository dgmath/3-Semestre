import { TouchableOpacity } from "react-native";
import { BoxCard, BoxCircle, CancelBox, Circle, ContainerShadowConsultas, DataUser, TextBox, TimeBox } from "../Container/Style"
import { ImageCard } from "../Image/Image";
import { TextBlue, TextGrayRegular, TextGraySemiBold, TextRed, TitleBlack } from "../Title/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonCancel, ButtonText, IconContent, TextBold } from "./Style";
import { AntDesign } from '@expo/vector-icons';


export const CardPaciente = ({
    name,
    rated,
    time,
    situacao,
    onPressCancel,
    onPressAppointment,

}) => {
    return (
        <ContainerShadowConsultas>
            <BoxCard>
                    <TextBox>
                        <TitleBlack>{name}</TitleBlack>
                        <IconContent>
                        <AntDesign name="star" size={20} color="#F9A620" />
                        <TextGold>{rated}</TextGold>
                        </IconContent>
                    </TextBox>
                    <CancelBox>
                        <TextCity></TextCity>
                        <TimeBox>
                            <MaterialCommunityIcons name="clock" size={14} color={"#49B3BA"} />
                            <TextBold>{time}</TextBold>
                        </TimeBox>
                    </CancelBox>
                
            </BoxCard>
        </ContainerShadowConsultas>
    )
}