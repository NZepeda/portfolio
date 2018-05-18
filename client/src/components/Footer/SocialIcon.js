import React from 'react';

const SocialIcon = (props) => {
    const createClass = () =>{
        return `fa fa-fw fa-${props.social}`
    }
    return(
        <li className="list-inline-item">
            <a className="social-icon-footer" href={props.link}>
                <i className={createClass()}></i>
            </a>
        </li>
    )
}

export default SocialIcon;