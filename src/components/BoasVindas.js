import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <Image style={styles.backgroundImage} source={require('../imgs/bg.png')}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Seja bem-vindo.</Text>
                <Image source={require('../imgs/logo.png')} />
            </View>
            <View style={styles.footer}>
                <Button title="Fazer login" onPress={ () => Actions.formLogin() } />
            </View>
        </View>
    </Image>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15        
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1
    },    
    backgroundImage: {
        flex: 1,
        width: null
    },
    text: {
        color: '#fff',
        fontSize: 20

    }
});