
import { BoxCard, ContainerShadowConsultas, DataUser, DataUser2, TextBox} from "../Container/Style"
import { ImageCard } from "../Image/Image";
import {  TextGraySemiBold, TitleBlack } from "../Title/Style"



export const CardMedico = ({
    name,
    type,
    source,
    onPress,
    clickButton

}) => {
    return (
        <ContainerShadowConsultas clickButton={clickButton} onPress={onPress}>
            <BoxCard>
                <ImageCard
                //require('../../../src/assets/img/ImageCard.png')
                    source={source}
                />
                <DataUser2>
                    <TextBox>
                            <TitleBlack>{name}</TitleBlack>
                            <TextGraySemiBold>{type}</TextGraySemiBold>
                    </TextBox>
                </DataUser2>
            </BoxCard>
        </ContainerShadowConsultas>
    )
}