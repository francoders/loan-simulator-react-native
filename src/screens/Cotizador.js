import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native'
import colors from '.././utils/colors'
import Form from '../../src/components/Form'
import ResultCalculation from '../../src/components/ResultCalculation'
import Footer from '../../src/components/Footer'
import 'react-native-gesture-handler';

const Cotizador = () => {
    const [valor, setValor] = useState(null);
    const [intereses, setIntereses] = useState(null);
    const [meses, setMeses] = useState(null);
    const [total, setTotal] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const calculate = () => {
        clear();
        if (!valor) {
            setErrorMessage("Añade la cantidad a solicitar")
        } else if (!intereses) {
            setErrorMessage("Añade la cantidad de intereses")
        } else if (!meses) {
            setErrorMessage("Selecciona una cantidad de meses")
        } else {
            const i = intereses / 100;
            const fee = valor / ((1 - Math.pow(i + 1, -meses)) / i);
            setTotal({
                cuotaMensual: fee.toFixed(2),//.replace('.', ',')
                valorFinal: (fee * meses).toFixed(2)
            })
        }
    }

    const clear = () => {
        setErrorMessage("");
        setTotal(null);
    }

    return (
        < View style={styles.contents}>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.cardSimulator} />
                <View style={styles.contentHeader}>
                    <Image style={styles.icon} source={require('../../src/utils/icon/icon.png')} />
                    <Text style={styles.headTitle}>Cotizador de Intereses</Text>
                </View>
                <Form setValor={setValor} setIntereses={setIntereses} setMeses={setMeses} />
            </SafeAreaView>

            <ResultCalculation
                valor={valor}
                intereses={intereses}
                meses={meses}
                total={total}
                errorMessage={errorMessage}
            />

            <Footer calculate={calculate} />
        </View>
    );
}

export default Cotizador


const styles = StyleSheet.create({

    contents: {
        height: '100%',
        minHeight: '100%'
    },

    safeArea: {
        height: 290,
        alignItems: 'center',
    },

    headTitle: {
        color: 'white',
        marginTop: 45,
        fontSize: 22,
        fontWeight: 'bold',
    },

    contentHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    icon: {
        width: 40,
        height: 40,
        marginRight: 10
    },

    cardSimulator: {
        width: '100%',
        height: 200,
        backgroundColor: colors.SECONDARY_COLOR_DARK,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'absolute',
        zIndex: -1
    }
})