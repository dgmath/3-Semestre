import { Input, InputD, InputP } from "../Input/Index"
import { Label } from "../Label/Index"
import { FieldContent } from "./Style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
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
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />

        </FieldContent>
        
    )
}

export const BoxInput2 = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength

}) => {
    return(
        // "conteúdo do campo" tipo a div sabe?
        <FieldContent fieldWidth={fieldWidth}>
            {/* label e input */}

            <Label 
                textLabel={textLabel}
            /> 

            <InputP
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />

        </FieldContent>
        
    )
}
export const BoxInput3 = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength

}) => {
    return(
        // "conteúdo do campo" tipo a div sabe?
        <FieldContent fieldWidth={fieldWidth}>
            {/* label e input */}

            <Label 
                textLabel={textLabel}
            /> 

            <InputD
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />

        </FieldContent>
        
    )
}
