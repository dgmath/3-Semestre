import { BoxCard, BoxCircle, CancelBox, Circle, ContainerShadowConsultas, DataUser, TextBox, TimeBox } from "../Container/Style"
import { ImageCard } from "../Image/Image";
import { TextBlue, TextGrayRegular, TextGraySemiBold, TextRed, TitleBlack } from "../Title/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const CardPaciente = ({ name, age, type, time }) => {
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
                        <TimeBox>
                            <MaterialCommunityIcons name="clock" size={14} color="#49B3BA" />
                            <TextBlue>{time}</TextBlue>
                        </TimeBox>
                        <TextRed>Cancelar</TextRed>
                    </CancelBox>
                </DataUser>
            </BoxCard>
        </ContainerShadowConsultas>
    )
}