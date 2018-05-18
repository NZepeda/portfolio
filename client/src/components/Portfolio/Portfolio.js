import React, {Component} from 'react'
import PortfolioProject from './PortfolioProject';
import ReactModal from 'react-modal';
import TweetSentimentAnalyzer from '../Modal/TweetSentimentAnalyzer';
import analyzer from '../../images/tweet-sentiment-analyzer.png';

class Portfolio extends Component {
    constructor(){
        super();

        ReactModal.setAppElement("#root");

        this.state = {
            modalIsOpen:false
        };

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.customStyles = this.customStyles.bind(this);
    }
    handleOpenModal(){
        this.setState({modalIsOpen:true})
    }
    handleCloseModal(){
        this.setState({modalIsOpen: false})
    }
    customStyles(){
        return ({
            content : {
                maxWidth              : '75%',
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        })
      };
    render(){
        return (
            <section className="portfolio" id="portfolio">
                <ReactModal isOpen={this.state.modalIsOpen} contentLabel="Example Modal" role="dialog" style={this.customStyles()}>
                    <button onClick={this.handleCloseModal}>X</button>
                    <TweetSentimentAnalyzer/>
                </ReactModal>

                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <hr className="portfolio-dark mb-5"/>
                    <div className="row">
                        <PortfolioProject open={this.handleOpenModal} image={analyzer}/>
                        <PortfolioProject open={this.handleOpenModal}/>
                        <PortfolioProject open={this.handleOpenModal}/>
                        <PortfolioProject open={this.handleOpenModal}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;