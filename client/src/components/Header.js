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
                <Particles params={{
                    particles: {
                        number: {
                            value: 50
                        },
                        line_linked: {
                            shadow: {
                                enable: false,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }} />
                <header className="masthead bg-primary text-white text-center header-section">
                    <div className="container">
                        <img className="img-fluid mb-5 d-block mx-auto profile-img" src={profileImage} alt=""/>
                        <h1 className="text-uppercase mb-0">Nestor Zepeda</h1>
                        <hr className="code-light"/>
                        <h2 className="font-weight-light mb-0">Web Developer - Software Engineer</h2>
                    </div>
                    <Script url="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"
                            onCreate={this.handleScriptCreate.bind(this)}
                            onError={this.handleScriptError.bind(this)}
                            onLoad={this.handleScriptLoad.bind(this)} />

                </header>
            </div>


        );
    }
}

export default Header;