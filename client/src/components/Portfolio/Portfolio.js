import React, {Component} from 'react'
import PortfolioProject from './PortfolioProject';
import ReactModal from 'react-modal';
import ModalBody from '../Modal/ModalBody';
import Equalizer from 'react-equalizer';
import analyzer from '../../images/tweet-sentiment-analyzer.png';
import platewatch from '../../images/platewatch.png';

class Portfolio extends Component {
    constructor(){
        super();

        ReactModal.setAppElement("#root");

        this.state = {
            modalIsOpen:false,
            projectSelected: null
        };

        this.projects = {
            sentimentAnalyzer: {
                title: "Tweet Sentiment Analyzer",
                description: "User is able to input a twitter handle and see the overall sentiment of their tweets",
                tech: "React, NodeJs, Heroku, Google API's",
                git: "https://github.com/NZepeda/google-naturallanguage-tweetanalyzer",
                live: "https://user-tweet-sentiment-analyzer.herokuapp.com/",
            },
            platewatch: {
                title: "Platewatch",
                description: "Full-Stack web app built for the Monterey Bay Aquarium and the Smithsonian Museum. This is a citizen science project"
                            + " for students.",
                tech: "AngularJS, NodeJs, Heroku, MongoDB",
                git: '',
                live: 'http://platewatch-staging.herokuapp.com/'
            }

        }

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.customStyles = this.customStyles.bind(this);
    }
    handleOpenModal(event){
        this.setState({modalIsOpen:true, projectSelected: event.target.id})
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
                    <ModalBody project={this.projects[this.state.projectSelected]}/>
                </ReactModal>

                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <hr className="portfolio-dark mb-5"/>
                    <div className="row">
                        <PortfolioProject id="sentimentAnalyzer" open={this.handleOpenModal} image={analyzer} title="Tweet Sentiment Analyzer"/>
                        <PortfolioProject id="platewatch" open={this.handleOpenModal} image={platewatch} title="Platewatch"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;