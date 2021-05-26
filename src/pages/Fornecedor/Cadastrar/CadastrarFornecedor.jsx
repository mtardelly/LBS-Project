import React,{useState} from 'react';
import {Form} from "react-bootstrap";
import {Formik} from 'formik';
import * as Yup from 'yup';
import {validarCpf, formatarCpfeCnpj} from '../../../utils/cpf-util';
import formatarCep from '../../../utils/cep-util';
import formatarTelefone from '../../../utils/telefone-util';

export default function CadastrarFornecedor() {

    const APIREST_URL = "http://"

    const[formEnviado,setFormEnviado] = useState(null);
    const[showModal,setShowModal] = useState(false);
    const[showErrorModal,setShowErrorModal] = useState(false);

    const schema = Yup.object({
        inputNome:Yup.string().required().min(5),
        inputCPF:Yup.string().required().min(14).max(18).test('cpf-valido','CPF invalido', (inputCPF)=> validarCpf(inputCPF)),   
        inputCEP: Yup.string().required().min(9).max(9),
        inputTel: Yup.string().min(15).max(15)
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
                            <h2 className="card-title">CADASTRAR FORNECEDORES</h2>
                        </div>
                        <div className="container">
                            <Formik
                            onSubmit={(values) => finalizarCadastro(values)}
                            initialValues={{
                                inputNome:"",
                                inputCPF:"",
                                inputCEP:"",
                                inputTel:"",
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
                            <Form
                            noValidate
                            onSubmit={handleSubmit}
                            >
                                <div className="row justify-content-around">
                                    <Form.Group className="col-md-10">
                                        <label htmlFor="inputNome">Nome</label>
                                        <Form.Control
                                            type="text"
                                            id="inputNome"
                                            placeholder="Digite o nome do Fornecedor"
                                            data-testid="txt-nome"
                                            value={values.inputNome}
                                            size="lg"
                                            name="inputNome"
                                            onChange={handleChange}
                                            isValid={touched.inputNome && !errors.inputNome}
                                            isInvalid={touched.inputNome && !!errors.inputNome}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Digite um nome valido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                            <label htmlFor="inputCPF">CPF</label>
                                            <Form.Control
                                                type="text"
                                                name="inputCPF"
                                                className="form-control"
                                                values={values.inputCPF}
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
                                            <label htmlFor="inputCEP">CEP</label>
                                            <Form.Control
                                                type="text"
                                                name="inputCEP"
                                                className="form-control"
                                                values={values.inputCEP}
                                                id="inputCPF"
                                                placeholder="Digite o CEP do vendedor"
                                                onChange={e => {
                                                    e.currentTarget.value = formatarCep(e.currentTarget.value);
                                                    handleChange(e);
                                                  }}
                                                isValid={touched.inputCEP && !errors.inputCEP}
                                                isInvalid={touched.inputCEP && !!errors.inputCEP}
                                                value={values.inputCEP}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Digite um CEP valido
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <label htmlFor="inputTel">Telefone</label>
                                            <Form.Control
                                                type="text"
                                                name="inputTel"
                                                className="form-control"
                                                values={values.inputTel}
                                                id="inputTel"
                                                placeholder="Digite o telefone do vendedor"
                                                onChange={e => {
                                                    e.currentTarget.value = formatarTelefone(e.currentTarget.value);
                                                    handleChange(e);
                                                  }}
                                                isValid={touched.inputTel && !errors.inputTel}
                                                isInvalid={touched.inputTel && !!errors.inputTel}
                                                value={values.inputTel}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Digite um Telefone valido
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                <div className="row justify-content-end border-success">
                                <button type="submit" className="btn btn-primary mr-2">
                                    Cadastrar
                                </button>
                                </div>
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
