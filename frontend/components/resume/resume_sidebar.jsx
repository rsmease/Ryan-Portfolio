import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

class ResumeSidebar extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        document.title = "Ryan Mease - Resume";
    }

    render() {
        return (
            <div className="resume-sidebar">
                <div className="resume-sidebar-index">
                    <h1 className="resume-sidebar-title">Recent Projects</h1>
                    <div className="resume-sidebar-index-item">
                        <h2 className="resume-sidebar-index-item-title">Ashai</h2>
                        <h3 className="resume-sidebar-index-item-subtitle">Individual Project</h3>
                        <p className="resume-sidebar-index-item-content">
                            Asana clone
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            React, Redux, Ruby on Rails
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            PostgreSQL, Vanilla JavaScript
                        </p>
                    </div>
                </div>
                <div className="resume-sidebar-divider"></div>
                <div className="resume-sidebar-index">
                    <h1 className="resume-sidebar-title">Education</h1>
                    <div className="resume-sidebar-index-item">
                        <h3 className="resume-sidebar-index-item-date">2017</h3>
                        <h2 className="resume-sidebar-index-item-title title-reverse-margin">App Academy</h2>
                        <p className="resume-sidebar-index-item-content">
                            Selective full-stack bootcamp
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            Web development, OOP, algorithm design
                        </p>
                    </div>
                    <div className="resume-sidebar-index-item">
                        <h3 className="resume-sidebar-index-item-date">2013</h3>
                        <h2 className="resume-sidebar-index-item-title title-reverse-margin">University of Chicago</h2>
                        <p className="resume-sidebar-index-item-content">
                            BA, Greek and Latin
                        </p>
                    </div>
                </div>
                <div className="resume-sidebar-divider"></div>
                <div className="resume-sidebar-index">
                    <h1 className="resume-sidebar-title">Skills</h1>
                    <div className="resume-sidebar-index-item">
                        <h2 className="resume-sidebar-index-item-subtitle add-30-top-margin">Talking to Computers</h2>
                        <p className="resume-sidebar-index-item-content">
                            React, Redux, JavaScript (ES6)
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            Vanilla JavaScript, jQuery, HTML5, CSS3
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            Ruby on Rails, PostgreSQL, Express, npm, git
                        </p>
                    </div>
                    <div className="resume-sidebar-index-item">
                        <h2 className="resume-sidebar-index-item-subtitle add-30-top-margin">Talking to People</h2>
                        <p className="resume-sidebar-index-item-content">
                            Ancient Greek, Latin
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            Spanish, German, French
                        </p>
                    </div>
                </div>
            </div >
        );
    }
}

export default ResumeSidebar;