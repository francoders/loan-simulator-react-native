import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Cotizador from './src/screens/Cotizador'
import Login from './src/screens/Login'
import * as LocalAuthentication from 'expo-local-authentication';

const App = (props) => {

   const [isBiometricSupported, setIsBiometricSupported] = useState(false)
   const [isAuthenticated, setIsAuthenticated] = useState(false)


   useEffect(() => {
      (async () => {
         const compatible = await LocalAuthentication.hasHardwareAsync();
         setIsBiometricSupported(compatible);
      })();
   });

   function onAuthenticate() {
      const auth = LocalAuthentication.authenticateAsync({
         promptMessage: 'Ingresa con tu Touch ID',
         fallbackLabel: 'Ingresa una contraseña',
      });
      auth.then(result => {
         setIsAuthenticated(result.success);
         console.log(result);
      });
   }

   return (
      <View>
         {isAuthenticated ?
            <Cotizador />
            :
            <Login onAuthenticate={onAuthenticate} />
         }

      </View>
   )
}

export default App