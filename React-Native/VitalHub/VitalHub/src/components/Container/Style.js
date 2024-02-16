import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #49B3BA;
`
export const ContainerPerfil = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FBFBFB;
`
export const ContainerConsulta = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FBFBFB;
`
export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'], // Cores do gradiente
    start: {x: -0.05, y: 1.08},// Ponto inicial do gradiente
    end: {x: 1, y: 0} // Ponto final do gradiente
})`

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
export const DataUser = styled.View`
    gap: 5px;
`
export const BoxUser = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`


export const ContainerLabel = styled.SafeAreaView`
width: 80%;
    flex-direction: row;
    justify-content: space-between;
`
export const ContainerShadow = styled.SafeAreaView`
    background-color: #FBFBFB;
    width: 70%;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-top: 300px;
    align-items: center;
    justify-content: center;
`
export const ContainerShadowConsultas = styled.SafeAreaView`
    background-color: #FBFBFB;
    width: 90%;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
export const ContainerInput = styled.SafeAreaView`
    width: 80%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 25px;
    
`

export const ContainerButton = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`

export const TextBox = styled.View`
    width: 100%;
    /* align-items: center; */
`
export const BoxCircle = styled.View`
    width: 100%;
    align-items: center;
    gap: 5px;
    flex-direction: row;
    /* align-items: center; */
`
export const Circle = styled.View`
    border-radius: 100px ;
    background-color: #D9D9D9;
    width: 3px;
    height: 3px;
`