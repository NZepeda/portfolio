import React, {Component} from 'react';
import project from '../../images/project.jpg';

class PortfolioProject extends Component {
    render(){
        return(
            <div className="col">
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <a className="btn btn-primary" onClick={this.props.open}>More Info</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioProject;