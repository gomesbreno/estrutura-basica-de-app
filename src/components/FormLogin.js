import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

    _autenticarUsuario(){
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha }); 
    }

    renderBtnAcessar(){
        if(this.props.loading_login){
            return(
                <ActivityIndicator size="large"/>
            );
        }
        return(
            <Button
                title="Acessar"
                color='#115E54'
                onPress={() => this._autenticarUsuario()}
            />
        );
    }

    render() {
        return (
            <Image style={styles.backgroundImage} source={require('../imgs/bg.png')}>
                <View style={styles.container}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.textTitulo}>WhatsApp Clone</Text>
                    </View>
                    <View style={styles.formulario}>
                        <TextInput style={styles.input} value={this.props.email} placeholder='Email'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                            placeholderTextColor='#fff' />
                        <TextInput style={styles.input} value={this.props.senha} placeholder='Senha'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                            placeholderTextColor='#fff'
                            secureTextEntry={true} />
                        <Text style={styles.erroText}>{ this.props.erroLogin }</Text>    
                        <TouchableHighlight onPress={() => Actions.formCadastro()}>
                            <Text style={styles.textFormulario}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.botaoContainer}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    tituloContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formulario: {
        flex: 2
    },
    botaoContainer: {
        flex: 2
    },
    textTitulo: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: '#fff'
    },
    input: {
        fontSize: 20,
        height: 45
    },
    textFormulario: {
        fontSize: 20,
        color: '#fff'
    },
    backgroundImage: {
        flex: 1,
        width: null
    },
    erroText: {
        color: '#ff0000',
        fontSize: 18
    }
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login : state.AutenticacaoReducer.loading_login
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);

