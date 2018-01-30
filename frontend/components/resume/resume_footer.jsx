import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

class ResumeFooter extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="resume-footer">
                <a
                    href="https://github.com/rsmease"
                    target="_blank">
                    <FontAwesome.FaGit className="resume-footer-icon" />
                </a>
                <a
                    href="https://drive.google.com/file/d/1dpAQGgZQC1TCvzGTeIirHk9aRnJNHM9P/view?usp=sharing"
                    target="_blank" >
                    <FontAwesome.FaPrint className="resume-footer-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ryan-mease-140b473a/"
                    target="_blank">
                    <FontAwesome.FaLinkedin className="resume-footer-icon" />
                </a>
            </div>
        );
    }
}

export default ResumeFooter;