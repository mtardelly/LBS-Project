import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {Formik} from 'formik';
import * as Yup from 'yup';
import {validarCpf, formatarCpfeCnpj} from '../../../utils/cpf-util';
import formatarCep from '../../../utils/cep-util';
import formatarTelefone from '../../../utils/telefone-util';


function aoEnviar(dados) {
    console.log(dados)
}

export default function CadastrarClientes() {
  
    const APIREST_URL = "http://"

    const[formEnviado,setFormEnviado] = useState(null);
    const[showModal,setShowModal] = useState(false);
    const[showErrorModal,setShowErrorModal] = useState(false);

    const schema = Yup.object({
        inputNome:Yup.string().required().min(5),
        inputCPF:Yup.string().required().min(14).max(18).test('cpf-valido','CPF invalido', (inputCPF)=> validarCpf(inputCPF)),   
        inputCEP: Yup.string().required().min(9).max(9),
        inputTel: Yup.string().min(15).max(15),
        inputEmail: Yup.string().min(6),
        inputSexo: Yup.string().required(),
    });

    async function finalizarCadastro(dados){
        setFormEnviado(true);
        console.log(dados)
        setShowModal(true);
        return;
    }

    function handleContinuar(){
        setShowModal(false);
    }

    

    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card card-menus-edit">
                        <div className="card-body">
                            <h2 className="card-title">CADASTRAR CLIENTES</h2>
                        </div>
                        <div className="container">
                        <Formik
                            onSubmit={(values) => finalizarCadastro(values)}
                            initialValues={{
                                inputNome:"oi",
                                inputCPF:"oi",
                                inputCEP:"oi",
                                inputTel:"oi",
                                inputEmail:"oi",
                                inputSexo:"oi",
                                inputPais:"oi",
                                inputUF:"oi",
                                inputCidade:"oi",
                                inputEndereco:"oi",
                            }}
                            validationSchema={schema}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    touched,
                                    errors
                                })=>(
                            <Form className="forms-sample"
                            noValidate
                            onSubmit={handleSubmit}
                            >
                                <div className="row justify-content-around">
                                    <Form.Group className="col-md-10">
                                        <label htmlFor="inputNome">Nome *</label>
                                        <Form.Control
                                            type="text"
                                            name="inputNome"
                                            id="inputNome"
                                            placeholder="Digite o nome do vendedor"
                                            value={values.inputNome}
                                            size="lg"
                                            onChange={handleChange}
                                            isValid={touched.inputNome && !errors.inputNome}
                                            isInvalid={touched.inputNome && !!errors.inputNome}
                                        />
                                    </Form.Group>
                                    <Form.Control.Feedback type="invalid">
                                            Digite um nome valido
                                        </Form.Control.Feedback>
                                </div>
                                <div className="row justify-content-around">


                                    <div className="col-md-4">

                                        <Form.Group>
                                            <label htmlFor="inputCPF">CPF</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                values={values.inputCPF}
                                                name="inputCPF"
                                                id="inputCPF"
                                                placeholder="Digite o cpf do vendedor"
                                                onChange={e => {
                                                    e.currentTarget.value = formatarCpfeCnpj(e.currentTarget.value);
                                                    handleChange(e);
                                                  }}
                                                isValid={touched.inputCPF && !errors.inputCPF}
                                                isInvalid={touched.inputCPF && !!errors.inputCPF}
                                                value={values.inputCPF}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Digite um CPF valido
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputEmail">Email</label>
                                            <Form.Control
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                name="inputEmail"
                                                placeholder="Digite o email do vendedor"
                                                onChange={handleChange}
                                                isValid={touched.inputEmail && !errors.inputEmail}
                                            isInvalid={touched.inputEmail && !!errors.inputEmail}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Digite um email valido
                                        </Form.Control.Feedback>
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputTel">Telefone</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputTel"
                                                name="inputTel"
                                                pplaceholder="Digite o telefone do vendedor"
                                                onChange={e => {
                                                    e.currentTarget.value = formatarTelefone(e.currentTarget.value);
                                                    handleChange(e);
                                                  }}
                                                isValid={touched.inputTel && !errors.inputTel}
                                                isInvalid={touched.inputTel && !!errors.inputTel}
                                                values={values.inputTel}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Digite um Telefone valido
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputSexo">Sexo</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputSexo"
                                                name="inputSexo"
                                                placeholder="Digite o sexo do vendedor"
                                                onChange={handleChange}
                                            />
                                             
                                            <Form.Control.Feedback type="invalid">
                                            Digite um sexo valido
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputDataNasc">Data de Nascimento</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputDataNasc"
                                                placeholder="Digite a data de nascimento"
                                                onChange={handleChange}
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
                                                name="inputEndereco"
                                                onChange={handleChange}
                                                value={values.inputEndereco}
                                            />
                                        </Form.Group>


                                        <Form.Group>
                                            <label htmlFor="inputCEP">CEP</label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                id="inputCEP"
                                                placeholder="Digite um CEP"
                                                name="inputCEP"
                                                onChange={handleChange}
                                                value={values.inputCEP}
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
                                                name="inputCidade"
                                                onChange={handleChange}
                                                value={values.inputCidade}
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
                                                name="inputUF"
                                                placeholder="Digite a UF"
                                                onChange={handleChange}
                                                value={values.inputUF}
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
                                                name="inputPais"
                                                onChange={handleChange}
                                                value={values.inputPais}
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
                            )}
                             </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
