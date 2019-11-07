import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Sobre from './pages/Sobre';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

class App extends React.Component {
    state = {
        navbarOpen: false,
    };
    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

    componentDidMount(){

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
                <Footer />
                <GlobalStyle />
            </React.Fragment>
        );
    }
}

export default App;
