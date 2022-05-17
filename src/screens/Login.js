import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../utils/colors';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Login = ({ onAuthenticate }) => {
    return (
        <View style={styles.mainContent}>
            <Text style={styles.textTitle}>Aplicacion de Intereses</Text>
            <Image style={styles.icon} source={require('../../src/utils/icon/icon.png')} />
            <TouchableOpacity
                style={styles.btn}
                onPress={onAuthenticate}
            >
                <Text style={styles.textBtn}> <Image style={styles.logo} source={require('../../src/utils/images/huella.png')} /> </Text>

            </TouchableOpacity>
            <Text style={styles.p}> Ingresa con tu huella Digital</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContent: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn: {
        backgroundColor: colors.PRIMARY_COLOR_LIGHT,
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    textBtn: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: -10
    },
    logo: {
        width: 48,
        height: 48,
    },

    textTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 30,
    },

    icon: {
        width: 100,
        height: 100,
        marginBottom: 180,
    },

    p: {
        color: 'gray',
        marginTop: 20,
        fontWeight: 'bold',
    },



})