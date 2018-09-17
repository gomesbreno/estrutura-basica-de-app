import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaNome,
    modificaEmail,
    modificaSenha,
    cadastraUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {

        //const nome = this.props.nome;
        //const email = this.props.email;
        //const senha = this.props.senha;
        //a linha a baixo é igual as de cima

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro(){
        if(this.props.loading_cadastro){
            return(
                <ActivityIndicator size="large"/>
            );
        }
        return(            
            <Button title='Cadastrar' color='#115E54' onPress={() => this._cadastraUsuario()} />
        );
    }

    render() {
        return (
            <Image style={styles.backgroundImage} source={require('../imgs/bg.png')}>
                <View style={styles.container}>
                    <View style={styles.formulario}>
                        <TextInput style={styles.input} value={this.props.nome} placeholder='Nome'
                            onChangeText={texto => this.props.modificaNome(texto)}
                            placeholderTextColor='#fff' />
                        <TextInput style={styles.input} value={this.props.email} placeholder='E-mail'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                            placeholderTextColor='#fff' />
                        <TextInput style={styles.input} value={this.props.senha} placeholder='Senha'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                            placeholderTextColor='#fff'
                            secureTextEntry={true} />
                        <Text style={styles.textErro}>{ this.props.erroCadastro }</Text>
                    </View>
                    <View style={styles.botaoContainer}>
                        {this.renderBtnCadastro()}
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
    formulario: {
        flex: 4,
        justifyContent: 'center',
    },
    botaoContainer: {
        flex: 1
    },
    input: {
        fontSize: 20,
        height: 45
    },
    backgroundImage: {
        flex: 1,
        width: null
    },
    textErro: {
        color: '#ff0000',
        fontSize: 18

    }
});

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
);

export default connect(
    mapStateToProps,
    {
        modificaNome,
        modificaEmail,
        modificaSenha,
        cadastraUsuario,        
    }
)(formCadastro);