import { useEffect, useState } from "react"
import { BoxInput } from "../../components/BoxInput/index"
import { FieldContentSpace } from "../../components/BoxInput/style"
import { ContainerForm, ContainerInput, ScrollForm } from "./style"
import axios from "axios"


// width 80% e o outro 20%



export function Home() {
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')

    useEffect(() => {
        try {
            async function buscarCep() {
                try {
                    if (cep != '' && cep.length === 8) {
                        const promise = await axios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}`);
                        
                        if (promise.error) {
                            return;
                        }

                        setLogradouro(promise.data.result.street)
                        setBairro(promise.data.result.district)
                        setCidade(promise.data.result.city)
                        setEstado(promise.data. result.state)
                        setUf(promise.data.result.stateShortname)

                        console.log(bairro);
                    }


                } catch (error) {
                    console.log("Erro ao buscar o cep");
                }
            } 
        }
        catch (error) {
        }
        buscarCep();
    }, [cep])




return (
    <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='Informar CEP'
                    placeholder='Cep...'
                    keyType='numeric'
                    maxLength={9}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={(tx) => { setCep(tx) }}
                />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder="Logradouro..."
                    keyType="text"
                    maxLength={9}
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder="Bairro..."
                    keyType="text"
                    maxLength={9}
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder="Cidade..."
                    keyType="text"
                    maxLength={9}
                    fieldValue={cidade}
                />
                <ContainerInput>

                    <BoxInput
                        textLabel='Estado'
                        placeholder="Estado..."
                        keyType="text"
                        maxLength={9}
                        fieldWidth={70}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel='UF'
                        placeholder="UF"
                        keyType="text"
                        maxLength={9}
                        fieldWidth={20}
                        fieldValue={uf}
                    />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    </>
)
}