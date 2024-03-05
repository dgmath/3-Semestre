import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const InputSelect = () => {
  return (
    <View style={{ width : 316 }}>
      <RNPickerSelect
        style={style}
        Icon={() => {
          return <MaterialIcons name="keyboard-arrow-down" size={22} color="#34898F" />
        //   return <FontAwesomeIcon icon={faCaretDown} color='#34898F' size={22}/>
        }}
        placeholder={{
          label : 'Selecione um valor',
          value : null,
          color : '#34898F'
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "08:00", value: "08:00" },
          { label: "09:00", value: "09:00" },
          { label: "10:00", value: "10:00" },
          { label: "11:00", value: "11:00" },
          { label: "12:00", value: "12:00" },
          { label: "13:00", value: "13:00" },
          { label: "14:00", value: "14:00" },
          { label: "15:00", value: "15:00" },
          { label: "16:00", value: "16:00" },
          { label: "17:00", value: "17:00" },
          { label: "18:00", value: "18:00" },

        ]}
      />
    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems : 'center',
    justifyContent : 'center',
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent : 'center',
    
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  iconContainer : {
    top : '25%',
    marginRight : 10
  },
  placeholder : {
    color: '#34898F',
  }
})

export default InputSelect;