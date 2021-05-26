import react,{useState} from 'react';
import {Form} from "react-bootstrap";
import React from "react";

export default function CadastrarProduto() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantitade] = useState("");
    const [custo, setCusto] = useState("");
    const [preco, setPreco] = useState("");

    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card card-menus-edit">
                        <div className="card-body">
                            <h2 className="card-title">CADASTRAR PRODUTO</h2>
                        </div>
                        <div className="container">
                            <Form className="forms-sample"
                                  onSubmit={(event) => {
                                      event.preventDefault();
                                  }
                                  }>
                                <div className="row justify-content-around">
                                    <Form.Group className="col-md-10">
                                        <label htmlFor="inputNome">Nome</label>
                                        <Form.Control
                                            type="text"
                                            id="inputNome"
                                            placeholder="Digite o nome do Fornecedor"
                                            size="lg"
                                            onChange={(event) => {
                                                setNome(event.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="row justify-content-around">


                                    <div className="col-md-4">

                                        <Form.Group>
                                            <label htmlFor="inputCNPJ">Desciçao</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputCPF"
                                                placeholder="Digite o cnpj da empresa"
                                                onChange={(event) => {
                                                    setDescricao(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputEmail">Quantidade</label>
                                            <Form.Control
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                placeholder="Digite o email do fornecedor"
                                                onChange={(event) => {
                                                    setQuantitade(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                

                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group>
                                            <label htmlFor="inputTelefone">custo</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputTelefone"
                                                placeholder="Digite o telefone do vendedor"
                                                onChange={(event) => {
                                                    setCusto(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputCelular">preco</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputCelular"
                                                placeholder="Digite o celular do vendedor"
                                                onChange={(event) => {
                                                    setPreco(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                    
                                    </div>
                                </div>
                                <div className="row justify-content-end border-success">
                                <button type="submit" className="btn btn-primary mr-2">
                                    Cadastrar
                                </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
