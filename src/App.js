import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./App.scss";
import Routes from "./routes";
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';

class App extends Component {
  state = {}

  componentDidMount() {
    this.onRouteChanged();

  }

  render() {
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    return (
        <div className="container-scroller">
          {navbarComponent}
          <div className="container-fluid page-body-wrapper ">
            {sidebarComponent}
            <div className="main-panel">
              <div className="content-wrapper">
                <Routes/>
              </div>
              {footerComponent}
            </div>
          </div>
        </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login'];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }


}

export default withRouter(App);
