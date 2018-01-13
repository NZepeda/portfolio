import React, {Component} from 'react';
import profileImage from '../images/profile.jpg';

class Header extends Component {
    render(){
        return(
            <header className="masthead bg-primary text-white text-center header-section">
                <div className="container">
                    <img className="img-fluid mb-5 d-block mx-auto profile-img" src={profileImage} alt=""/>
                    <h1 className="text-uppercase mb-0">Nestor Zepeda</h1>
                    <hr className="code-light"/>
                    <h2 className="font-weight-light mb-0">Web Developer - Software Engineer</h2>
                </div>
            </header>
        );
    }
}

export default Header;