import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./Login.css";
import LogoLBS from "../../assets/images/auth/logolbs.svg";

export default function Login() {
  return (
    <div className=" main Login__">
      <div className="conteiner-fluid">
        <div className="row vh-100 ">
          <div className="col-md-4 Login__div_lateral text-center py-5 d-flex flex-column justify-content-center ">
            <div className="col-md-10 Login__campos pt-5 justify-content-md-center">
              <h4 className="Login__padding">LOGIN</h4>
              <h6 className="font-weight-light">Digite suas credenciais</h6>
              <Form className="pt-2">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"u
                    placeholder="CPF"
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <div className="mt-5">
                  <Link
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    to="/dashboard"
                  >
                    ENTRAR
                  </Link>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="Login__direito col-md-8 text-center py-5 d-flex flex-column justify-content-center auth-bg-section text-white">
            <img src={LogoLBS} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
