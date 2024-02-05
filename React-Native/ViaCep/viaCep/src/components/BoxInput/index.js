import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyType = 'default',
    maxLength

}) => {
    return(
        // "conteúdo do campo" tipo a div sabe?
        <FieldContent fieldWidth={fieldWidth}>
            {/* label e input */}

            <Label 
                textLabel={textLabel}
            /> 

       

            <Input
            placeholder={placeholder}
            editable={editable}
            keyType={keyType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />

        </FieldContent>
        
    )
}
