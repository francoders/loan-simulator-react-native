import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import colors from './src/utils/colors'

const App = () => {
   return (
      <>
         <SafeAreaView style={styles.safeArea}>
            <Text style={styles.text}>Formulario HEAD</Text>
         </SafeAreaView>

         <View>
            <Text>Resultado</Text>
         </View>

         <View>
            <Text>Footer</Text>
         </View>
      </>
   );
}

export default App

const styles = StyleSheet.create({
   safeArea: {
      backgroundColor: colors.PRIMARY_COLOR_DARK,
      height: 200,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      alignItems: 'center'
   },

   text: {
      color: 'white',
      marginTop: 80
   }
})