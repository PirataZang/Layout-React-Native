import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Logo from '../img/fogo.png';
import { useNavigation } from '@react-navigation/native';


// Tela de Login
export default function Logins() {

    const navigator = useNavigation();

    // const navegation = useNavigation();

    // Seta se a senha estará visivel ou não
    const [Eye, SetEye] = useState();

    // Email
    const [Email] = useState();

    // Senha
    const [Senha] = useState();


    return (
        <View>
            <View style={styles.LoginDiv}>
                <Image style={styles.logo} source={Logo} />

                <View style={styles.form}>
                    <Text style={styles.Font}>Informe o seu E-mail:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Informe o eu Email'
                        placeholderTextColor='#999'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={Email}
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.Font}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Informe sua Senha'
                        placeholderTextColor='#999'
                        secureTextEntry={!Eye}
                        value={Senha}
                    />
                    {/* MOstrar Senha */}
                    <TouchableOpacity style={styles.eye} onPress={() => SetEye(!Eye)}>
                        {Eye ? <FontAwesome5 name="eye-slash" size={24} color="#fff" /> : <FontAwesome5 name="eye" size={24} color="#fff" />}
                    </TouchableOpacity>
                </View>


                {/* Entrar no APP */}
                <TouchableOpacity style={styles.send} onPress={() => navigator.navigate('Tabs')}>
                    <Text style={styles.Font}>Entrar</Text>
                </TouchableOpacity>

                {/* Criar uma nova conta    */}
                <TouchableOpacity style={styles.criarConta}>
                    <Text style={styles.Font}>Cadatrar uma Nova Conta</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    logo: {
        maxHeight: 70,
        maxWidth: 70,
    },

    LoginDiv: {
        minHeight: 500,
        minWidth: 400,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        border: '2px solid #1a1a1a',
        padding: 20,
        borderRadius: 15,
    },

    form: {
        marginTop: 20,
        justifyContent: 'center',
    },

    Font: {
        fontWeight: 'bold',
        color: '#ffff',
    },

    input: {
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff',
        textAlign: 'justify',
        paddingHorizontal: 20,
        paddingLeft: 10,
        width: 350,
        height: 44,
        borderRadius: 7,
    },

    eye: {
        marginRight: 300,
        marginTop: 5,
    },

    send: {
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#d62d2d',
        backgroundColor: '#d62d2d',
        borderRadius: 5,
        width: 350,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    criarConta: {
        marginTop: 70,
    },
})