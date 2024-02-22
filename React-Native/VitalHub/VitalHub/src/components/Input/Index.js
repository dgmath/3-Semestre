import { InputDiagnostico, InputPerfil, InputProntuario } from "./Style"

export const Input = ({
    customHeight,
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
            customHeight={customHeight}
        />

        
    )
}
export const InputP= ({
    customHeight = 53,
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength,
    customP,
    customWidth

}) => {
    return(
        <InputProntuario
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
            customHeight={customHeight}
            customWidth={customWidth}
            customP={customP}
        />

        
    )
}