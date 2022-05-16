import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors'

export default function Form(props) {

    const { setValor, setIntereses, setMeses } = props;


    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder='Cantidad a pedir'
                    keyboardType='numeric'
                    style={styles.inputs}
                    onChange={(event) => setValor(event.nativeEvent.text)}
                />

                <TextInput
                    placeholder='% Interes'
                    placeholderTextColor={'#9e4646'}
                    keyboardType='numeric'
                    style={[styles.inputs, styles.centrado]}
                    onChange={(event) => setIntereses(event.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect
                style={pickerSekectStyke}
                placeholder={{
                    label: 'Selecciona un Mes'
                }}
                onValueChange={(value) => setMeses(value)}
                items={[
                    { label: '3 meses', value: 3 },
                    { label: '6 meses', value: 6 },
                    { label: '12 meses', value: 12 },
                    { label: '24 meses', value: 24 },
                ]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '80%',
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 20,
        paddingHorizontal: 50,
        height: 180,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },

    viewInputs: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    inputs: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: colors.SECONDARY_COLOR_LIGHT,
        width: '60%',
        marginRight: 5,
        marginLeft: 5,
        paddingLeft: 10,
    },

    centrado: {
        width: '40%'
    },
})


const pickerSekectStyke = StyleSheet.create({
    inputAndroid: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingRight: 30,
        backgroundColor: '#fff',
        color: 'black',
        marginTop: 12
    },

    inputIOS: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingRight: 30,
        backgroundColor: '#fff',
        color: 'black',
        marginTop: 12
    }

})