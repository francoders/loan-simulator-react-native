import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

export default function Footer(props) {

    const { calculate } = props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity
                style={styles.btn}
                onPress={calculate}
            >
                <Text style={styles.textBtn}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.SECONDARY_COLOR_DARK,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn: {
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderWidth: 2,
        borderColor: colors.PRIMARY_COLOR_LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
        borderColor: 'red',

    }

})
