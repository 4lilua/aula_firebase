import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export function Navigator() {
    const[usuario, setUsuario] = useState(null);
    const[usuario, setUsuario] = useState(true);
    useEffect(() => {
        const teste =
        onAuthStateChanged(auth, (user) => {
            
        })
    })
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <StackScreen name='Home'>

            </StackScreen>
            <StackScreen name='nome'd>
                
            </StackScreen>
            <StackScreen name='nome'>
                
            </StackScreen>
        </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.container}>

    </View>
  );
}
