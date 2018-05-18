import React, {Component} from 'react';
import project from '../../images/project.jpg';

class PortfolioProject extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" onClick= {this.props.open}>
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={this.props.image} alt=""/>
                </a>
            </div>
        )
    }
}

export default PortfolioProject;