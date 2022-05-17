import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors'

export default function ResultCalculation(props) {

    const { errorMessage, valor, intereses, meses, total } = props

    console.log(props)

    return (
        <View style={styles.contentAlert}>
            {total && (
                <View style={styles.result}>
                    <Text style={styles.titleResult}>FACTURACIÓN</Text>
                    <InfoResult title="Cantidad Solicitada: " value={`${valor} CLP`} />
                    <InfoResult title="% de Intereses: " value={`${intereses} %`} />
                    <InfoResult title="Meses Solicitados: " value={`${meses}`} />
                    <InfoResult title="PAGO MENSUAL: " value={`${total.cuotaMensual}`} />
                    <InfoResult title="TOTAL A PAGAR: " value={`${total.valorFinal}`} />
                </View>
            )}

            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function InfoResult(props) {
    const { title, value } = props;

    return (
        <View style={styles.valor}>
            <Text>{title} </Text>
            <Text>{value} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contentAlert: {
        height: 100,
        width: '100%',
        paddingHorizontal: 38,
    },

    error: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },

    result: {
        padding: 30,

    },

    titleResult: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },

    valor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }


})
