import React, {Component} from 'react';
import profileImage from '../images/profile.jpg';
import Script from 'react-load-script';
import Particles from 'react-particles-js';

class Header extends Component {
    constructor(){
        super();
        this.state = {scriptLoaded: false}
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }
    
    handleScriptError() {
        this.setState({ scriptError: true })
    }
    
    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    render(){
        return(
            <div id="particles">
                <header className="masthead bg-primary text-white text-center header-section">
                    <div className="container">
                        <img className="img-fluid mb-5 d-block mx-auto profile-img" src={profileImage} alt=""/>
                        <h1 className="text-uppercase mb-0">Nestor Zepeda</h1>
                        <hr className="code-light"/>
                        <h2 className="font-weight-light mb-0">Web Developer - Software Engineer</h2>
                    </div>
                </header>
            </div>


        );
    }
}

export default Header;