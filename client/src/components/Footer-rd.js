import React, {Component} from 'react';
import footericon from '../images/icon.png';
class Footer extends Component {
    render() {
        return(
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="footer-icon" src={footericon} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <p>This website is based on designs from https://github.com/jeromelachaud/freelancer-theme</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a className="social-icon-footer" href="https://www.facebook.com/nestor.zepeda.3">
                                        <i className="fa fa-fw fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon-footer" href="https://www.linkedin.com/in/nestordzepeda/">
                                        <i className="fa fa-fw fa-linkedin"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon-footer" href="https://www.instagram.com/helloimnestor">
                                        <i className="fa fa-fw fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon-footer" href="https://github.com/NZepeda">
                                        <i className="fa fa-fw fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
        );
    }
}

export default Footer;