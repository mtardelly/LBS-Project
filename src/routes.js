import React, { Suspense } from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from './pages/Login'

import CadastrarVendedor from './pages/Vendedores/Cadastrar'

import CadastrarFornecedor from './pages/Fornecedor/Cadastrar'

import CadastrarCliente from './pages/Clientes/Cadastrar'

import CadastrarProduto from "./pages/Produtos/Cadastrar";

import ListaVendedores from "./pages/Vendedores/Lista"

export default function Routes(){
    return(
        <Suspense>
        <Switch>
            <Route path ='/login' exact component={Login}/>
            <Route path ='/dashboard'/>
            <Route path ='/vendedores/cadastrar' exact component={CadastrarVendedor}/>
            <Route path ='/vendedores/lista' exact component={ListaVendedores}/>
            <Route path ='/fornecedores/cadastrar' exact component={CadastrarFornecedor}/>
            <Route path ='/fornecedores/lista'/>
            <Route path ='/clientes/cadastrar' exact component ={CadastrarCliente}/>
            <Route path ='/produtos/cadastrar' exact component ={CadastrarProduto}/>
        </Switch>
        </Suspense>
    )
}