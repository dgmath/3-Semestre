import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #49B3BA;
`
export const ContainerPerfil = styled(Container)`
    background-color: #FBFBFB;
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
export const ContainerInput = styled.SafeAreaView`
    width: 80%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 25px;
    
`