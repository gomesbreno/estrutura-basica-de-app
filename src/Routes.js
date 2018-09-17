import React from 'react';
import { Router,  Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54'} } titleStyle={{ color: '#FFF' }}>
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={ true }/>
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro"hideNavBar={ false }/>
        <Scene key='boasVindas' component={BoasVindas} title="Bem-vindo" hideNavBar={ true } panHandlers={null}/>
        <Scene key='principal' component={Principal} title="Principal" hideNavBar={ true } panHandlers={null}/>
    </Router>
);