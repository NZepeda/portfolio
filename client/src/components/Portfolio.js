import React, {Component} from 'react'
import PortfolioProject from './PortfolioProject';

class Portfolio extends Component {
    render(){
        return (
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <hr className="portfolio-dark mb-5"/>
                    <div className="row">
                        <PortfolioProject/>
                        <PortfolioProject/>
                        <PortfolioProject/>
                        <PortfolioProject/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;