import React, {Component} from 'react';
import Download from '@axetroy/react-download';
import Resume from '../assets/test.txt';

class About extends Component {
    render(){
        return(
            <section className="bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="text-center text-uppercase text-white">About</h2>
                    <hr className="about-light mb-5"/>
                    <div className="row">
                        <div className="col">
                            <p className="lead body-text">
                                Hi there! I'm Nestor Zepeda, I've studied Computer Science with an emphasis on Software Engineering at California State University Monterey Bay.
                                I am currently working as a web developer at the Monterey Bay Aquarium. I specialize in fullstack web development but also have experience in iOS development. I 
                                am always looking to learn new frameworks and technologies by taking on personal side projects. 
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-xl btn-outline-light">
                            <i className="fa fa-download mr-2">&nbsp;<span className="body-text">Download Resume</span></i>
                        </button>
                    </div>
                </div>
          </section>
        );
    }
}

export default About;