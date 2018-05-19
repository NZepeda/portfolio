import React, {Component} from 'react';
import axios from 'axios';

class About extends Component {
    constructor(){
        super();

        this.downloadResume = this.downloadResume.bind(this);
    }
   async downloadResume(){
        const response = await axios.get('/api/resume', {responseType: 'arraybuffer'});

        const linkElement = document.createElement('a');
            try{
                const blob = new Blob([response.data], {type: "application/pdf"});
                console.log(blob);
                var url = window.URL.createObjectURL(blob);
    
                linkElement.setAttribute('href', url);
                linkElement.setAttribute('download', "NestorResume.pdf");
    
                var clickEvent = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": false
                });
    
                linkElement.dispatchEvent(clickEvent);
            }catch(ex){
                console.log(ex);
            }
    }
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
                            <i className="fa fa-download mr-2" onClick={this.downloadResume}>&nbsp;<span className="body-text">Download Resume</span></i>
                        </button>
                    </div>
                </div>
          </section>
        );
    }
}

export default About;