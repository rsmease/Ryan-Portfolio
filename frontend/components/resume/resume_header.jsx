import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

class ResumeHeader extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="resume-header">
                <div className="resume-title">Ryan Mease</div>
                <ul className="resume-contact-details-index">
                    <li className="resume-contact-details-index-item">Haight-Ashbury, California</li>
                    <li className="resume-contact-details-index-item">rsmease@gmail.com</li>
                    <li className="resume-contact-details-index-item">(415) 638-1940</li>
                </ul>
            </div>
        );
    }
}

export default ResumeHeader;