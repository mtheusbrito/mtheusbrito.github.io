import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
// paginas
import Sobre from './pages/Sobre';
import Stack from './pages/Stack';
import Projetos from './pages/Projetos';

import Contato from './pages/Contato';

class App extends React.Component {
    state = {
        navbarOpen: false,
    };
    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

    componentDidMount(){
        AOS.init({
            duration : 1000
          })
          window.onscroll = () => this.setState({navbarOpen: false})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
                <Home />
                <Sobre/>
                <Stack/>
                <Projetos/>
                <Contato/>
                <GlobalStyle />
            </React.Fragment>
        );
    }
}

export default App;
