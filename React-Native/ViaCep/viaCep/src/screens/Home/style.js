import styled from "styled-components";

export const ScrollForm = styled.ScrollView`
    height: 80% ;
`
//SafeAreaView serve como uma área de segurança evitando que um conteúdo invada área segura no topo
export const ContainerForm = styled.SafeAreaView`
    width: 80% ;
    margin: 20px auto;
    gap: 20px;
`

export const ContainerInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
`