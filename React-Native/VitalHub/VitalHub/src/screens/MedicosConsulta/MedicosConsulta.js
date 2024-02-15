import { ContainerPerfil } from "../../components/Container/Style"
import { ImageHeader } from "../../components/Image/Image"
import { ScrollForm } from "../../components/ScrollForm/Style"

export const MedicosConsulta = () => {
    return(
        <ScrollForm>
            <ContainerPerfil>
                <ContainerHeader>
                    <BoxUser>
                        <ImageHeader/>
                    </BoxUser>
                </ContainerHeader>
            </ContainerPerfil>
        </ScrollForm>
    )
}