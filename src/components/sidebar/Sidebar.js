import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import LbsLogo from "../../assets/images/auth/logolbs.svg";
import ExemploFace8 from "../../assets/images/faces/face8.jpg";


class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/login", state: "appsMenuOpen" },
      { path: "/vendedores", state: "formVendedores" },
      { path: "/fornecedores", state: "formFornecedores" },
      { path: "/clientes", state: "formClientes" },
      { path: "/produtos", state: "formProdutos" },
      { path: "/vendas", state: "formVendas" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="/">
            <img src={LbsLogo} alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html">
            <img src={LbsLogo} alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img
                        className="img-xs rounded-circle"
                        src={ExemploFace8}
                        alt="profile"
                      />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">Matheus Tardelly</p>
                      <p className="designation">Administrador</p>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item
                    className="dropdown-item p-0 preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Gerenciar Contas
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Alterar Senha
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>

          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>

          <li
            className={this.isPathActive("/vendedores") ? "nav-item active" : "nav-item"}
          >
            <div
              className={
                this.state.formVendedores
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formVendedores")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Vendedores</span>
              <i className="menu-arrow"/>
            </div>
            <Collapse in={this.state.formVendedores}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/vendedores/cadastrar")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/vendedores/cadastrar"
                  >
                    Cadastrar Vendedor
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/vendedores/lista")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/vendedores/lista"
                  >
                    Lista de Vendedores
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/fornecedores") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.formFornecedores
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formFornecedores")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Fornecedores</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formFornecedores}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/fornecedores/cadastrar")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/fornecedores/cadastrar"
                  >
                    Cadastrar Fornecedor
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/fornecedores/lista")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/fornecedores/lista"
                  >
                    Lista de Fornecedores
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/clientes") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.formClientes
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formClientes")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Clientes</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formClientes}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/clientes/cadastrar")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/clientes/cadastrar"
                  >
                    Cadastrar Cliente
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/clientes/lista")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/clientes/lista"
                  >
                    Lista de Clientes
                  </Link>
                </li>
                
              </ul>
            </Collapse>
          </li>
          
          <li
            className={
              this.isPathActive("/produtos") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.formProdutos
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formProdutos")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Produtos</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formProdutos}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/produtos/cadastrar")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/produtos/cadastrar"
                  >
                    Cadastrar Produtos
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/produtos/lista")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/produtos/lista"
                  >
                    Lista de Produtos
                  </Link>
                </li>
                
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/vendas") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.formVendas
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formVendas")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">CAIXA</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formVendas}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/vendas/cadastrar")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/vendas/cadastrar"
                  >
                    Cadastrar Venda
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/vendas/lista")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/vendas/lista"
                  >
                    Lista de Vendas
                  </Link>
                </li>
                
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
