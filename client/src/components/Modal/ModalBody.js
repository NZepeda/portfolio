import React from 'react';

const ModalBody = ({project}) => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12" style={{textAlign: "center"}}>
                    <h2>{project.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-md-12"><h4>Overview</h4></div>
                    <div className="col">
                        {project.description}
                    </div>
                </div>
            </div> 
            <br/>
            <div className="row">
                <div className="row">
                    <div className="col-md-12"><h4>Technology Used</h4></div>
                    <br/>
                    <div className="col">
                        {project.tech}
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    { project.git ? <a href={project.git}>Github Link</a>  : null }
                    &nbsp; &nbsp; &nbsp;
                    { project.live ? <a href={project.live}>Live Website</a> : null }
                </div>
            </div>
        </div>
    )
}

export default ModalBody;