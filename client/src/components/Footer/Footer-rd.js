import React, {Component} from 'react';
import SocialIcon from './SocialIcon';

import footericon from '../../images/icon.png';

class Footer extends Component {
    render() {
        return(
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="footer-icon" src={footericon} alt="footer-icon"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <ul className="list-inline mb-0">
                                <SocialIcon link="https://www.linkedin.com/in/nestordzepeda" social="linkedin"/>
                                <SocialIcon link="https://www.instagram.com/helloimnestor" social="instagram"/>
                                <SocialIcon link="https://github.com/nzepeda" social="github"/>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
        );
    }
}

export default Footer;