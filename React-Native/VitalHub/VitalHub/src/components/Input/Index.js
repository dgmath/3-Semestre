import { InputDiagnostico, InputPerfil, InputProntuario } from "./Style"

export const Input = ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength
}) => {
    return(
        <InputPerfil
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />

        
    )
}
export const InputD= ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength
}) => {
    return(
        <InputDiagnostico
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />

        
    )
}
export const InputP= ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength
}) => {
    return(
        <InputProntuario
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />

        
    )
}