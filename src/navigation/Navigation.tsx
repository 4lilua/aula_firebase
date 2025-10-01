import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const [usuario, setUsuario] = useState(null);
  const [carrega, setCarrega] = useState(true);
  useEffect(() => {
    const teste =
      onAuthStateChanged(auth, (user) => {
        setUsuario(user);
        setCarrega(false);
      });
    return () => teste();
  }, []);

  if(carrega){
    return(null);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {usuario ? (
          <Stack.Screen name='Home'>
            {(props) =>
              <HomeScreen {...props} usuario={usuario} />
            }

          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name='Login' component={LoginScreen}>

            </Stack.Screen>
            <Stack.Screen name='Cadastro' component={CadastroScreen}>

            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
