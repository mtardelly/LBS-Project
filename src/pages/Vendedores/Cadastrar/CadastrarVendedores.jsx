import React, {useState} from "react";
import {Form} from "react-bootstrap";

export default function CadastrarVendedores() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [sexo, setSexo] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    function validarSenha(event) {
        const {senha, confSenha} = event.target;
        if (senha === confSenha ){
           console.log("senha correta")
        }else{
            console.log("senha incorreta")
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card card-menus-edit">
                        <div className="card-body">
                            <h2 className="card-title">CADASTRAR VENDEDOR</h2>
                        </div>
                        <div className="container">
                            <Form className="forms-sample"
                                  onSubmit={(event) => {
                                      event.preventDefault();
                                      
                                  }
                                  }>
                                <div className="row justify-content-around">
                                    <Form.Group className="col-md-10">
                                        <label htmlFor="inputNome">Nome :</label>
                                        <Form.Control
                                            type="text"
                                            id="inputNome"
                                            placeholder="Digite o nome do vendedor"
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
                                            <label htmlFor="inputCPF">CPF</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputCPF"
                                                placeholder="Digite o cpf do vendedor"
                                                onChange={(event) => {
                                                    setCpf(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputEmail">Email</label>
                                            <Form.Control
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                placeholder="Digite o email do vendedor"
                                                onChange={(event) => {
                                                    setEmail(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputTelefone">Telefone</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputTelefone"
                                                placeholder="Digite o telefone do vendedor"
                                                onChange={(event) => {
                                                    setTelefone(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputSexo">Sexo</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputSexo"
                                                placeholder="Digite o sexo do vendedor"
                                                onChange={(event) => {
                                                    setSexo(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputDataNasc">Data de Nascimento</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputDataNasc"
                                                placeholder="Digite a data de nascimento"
                                                onChange={(event) => {
                                                    setSexo(event.target.value);
                                                }}
                                            />
                                        </Form.Group>

                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group>
                                            <label htmlFor="inputEndereco">Endereço</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputEndereco"
                                                placeholder="Digite o endereço do vendedor"
                                                onChange={(event) => {
                                                    setEndereco(event.target.value);
                                                }}
                                            />
                                        </Form.Group>


                                        <Form.Group>
                                            <label htmlFor="inputCEP">CEP</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputCEP"
                                                placeholder="Digite um CEP"
                                                onChange={(event) => {
                                                    setSenha(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputCidade">
                                                Cidade
                                            </label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputCidade"
                                                placeholder="Digite a cidade"
                                                onChange={(event) => {
                                                    setConfSenha(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputUF">
                                                UF
                                            </label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputUF"
                                                placeholder="Digite a UF"
                                                onChange={(event) => {
                                                    setConfSenha(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputPais">
                                                Pais
                                            </label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputPais"
                                                placeholder="Digite a cidade"
                                                onChange={(event) => {
                                                    setConfSenha(event.target.value);
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
    );
}
