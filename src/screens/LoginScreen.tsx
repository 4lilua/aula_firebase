import { signInWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {auth} from '../../firebaseConfig';

export function LoginScreen({navigation}) {
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[erro, setErro] = useState("");

    const login = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, senha);
        }catch(error){
            setErro("Erro no login: " + erro);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                style={styles.input}
            />
            {erro ? <Text style={styles.error}>{erro}
                </Text> : null}
            <Button title="Entrar" onPress={login} />
            <Button title="Cadastrar Usuário"
                onPress={() => navigation.navigate("Cadastro")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    error: {
        color: "red",
        marginBottom: 10
    },
});