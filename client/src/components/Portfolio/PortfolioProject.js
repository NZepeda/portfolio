import React, {Component} from 'react';

class PortfolioProject extends Component {
    render(){
        return(
            <div className="col">
                <div className="card" style={{width: '100%'}}>
                    <img className="card-img-top" src={this.props.image} alt="Project Image"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <a id={this.props.id} className="btn btn-primary" onClick={this.props.open}>More Info</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioProject;