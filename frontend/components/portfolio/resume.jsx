import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

class Resume extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        document.title = "Ryan Mease - Resume";
    }

    render() {
        return (
            <div className="resume-container">
                <div className="resume-header">
                    <div className="resume-title">Ryan Mease</div>
                    <ul className="resume-contact-details-index">
                        <li className="resume-contact-details-index-item">Haight Ashbury, California</li>
                        <li className="resume-contact-details-index-item">rsmease@gmail.com</li>
                        <li className="resume-contact-details-index-item">(415) 638-1940</li>
                    </ul>
                </div>
                <div className="resume-body">
                    <div className="left-index">
                        <h1 className="resume-index-header">Experience</h1>
                        <div className="left-index-item">
                            <div className="resume-index-item-header-alignment-container">
                                <ul className="resume-index-item-header">
                                    <li className="resume-index-item-header-bold">App Academy</li>
                                    <li className="resume-index-item-header-detail">Teaching Assistant</li>
                                </ul>
                                <div className="resume-index-item-header-date">12/2017 -</div>
                            </div>
                            <ul className="resume-index-item-content-index">
                                <li className="resume-index-item-content-index-item">
                                    Teach web development curriculum</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Ruby on Rails, React, JavaScript (ES6), HTML5, CSS3, git</li>
                                <li className="resume-index-item-content-index-item">
                                    Lecture students on assessment strategies</li>
                                <li className="resume-index-item-content-index-item">
                                    Review student programming projects</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Discuss design tradeoffs, OOP strategies</li>
                            </ul>
                        </div>
                        <div className="left-index-item">
                            <div className="resume-index-item-header-alignment-container">
                                <ul className="resume-index-item-header">
                                    <li className="resume-index-item-header-bold">Airbus Group, Inc.</li>
                                    <li className="resume-index-item-header-detail">Operations Manager</li>
                                </ul>
                                <div className="resume-index-item-header-date">08/2015 - 10/2017</div>
                            </div>
                            <ul className="resume-index-item-content-index">
                                <li className="resume-index-item-content-index-item">
                                    Founding employee, aerospace research lab</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Negotiated, signed 100s of agreements for aerospace parts and engineering services</li>
                                <li className="resume-index-item-content-index-subitem">
                                    $10K signing authority, $2-4M annual spending</li>
                                <li className="resume-index-item-content-index-item">
                                    Oversaw development of public website and internal wiki</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Ruby on Rails, HTML5, CSS3</li>
                            </ul>
                        </div>
                        <div className="left-index-item">
                            <div className="resume-index-item-header-alignment-container">
                                <ul className="resume-index-item-header">
                                    <li className="resume-index-item-header-bold">Stanford University</li>
                                    <li className="resume-index-item-header-detail">Department of Computer Science</li>
                                    <li className="resume-index-item-header-detail">Student Services Specialist</li>
                                </ul>
                                <div className="resume-index-item-header-date">12/2013 - 08/2015</div>
                            </div>
                            <ul className="resume-index-item-content-index">
                                <li className="resume-index-item-content-index-item">
                                    Maintained MySQL database of 1000s of academic records</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Monitor student degree progress, track student demographics</li>
                                <li className="resume-index-item-content-index-item">
                                    Maintained department webpages</li>
                                <li className="resume-index-item-content-index-subitem">
                                    vi, Drupal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-index">
                        <h1 className="resume-index-header">Recent Projects</h1>
                        <div className="right-index-item">
                            <div className="resume-index-item-header-alignment-container">
                                <ul className="resume-index-item-header">
                                    <li className="resume-index-item-header-bold">Ashai</li>
                                    <li className="resume-index-item-header-detail">Individual Project</li>
                                </ul>
                                <div className="resume-index-item-header-date">2017</div>
                            </div>
                            <ul className="resume-index-item-content-index">
                                <li className="resume-index-item-content-index-item">
                                    Asana clone featuring React front-end, Rails back-end</li>
                                <li className="resume-index-item-content-index-subitem">
                                    npm, Redux store, Vanilla JavaScript, PostgreSQL API</li>
                                <li className="resume-index-item-content-index-item">
                                    Refactored version has 800 fewer lines of code</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Single react-modal processes nearly all CRUD actions</li>
                                <li className="resume-index-item-content-index-item">
                                    Responsive search bar finds users, projects, teams and tasks</li>
                            </ul>
                        </div>
                        <br />
                        <h1 className="resume-index-header">Education</h1>
                        <div className="right-index-item">
                            <div className="resume-index-item-header-alignment-container">
                                <ul className="resume-index-item-header">
                                    <li className="resume-index-item-header-bold">Professional Skills</li>
                                </ul>
                            </div>
                            <ul className="resume-index-item-content-index">
                                <li className="resume-index-item-content-index-item">
                                    Talking to Computers</li>
                                <li className="resume-index-item-content-index-subitem">
                                    React, Redux, JavaScript (ES6), CSS3, HTML5, Ruby on Rails, npm, git, PostreSQL, jQuery, Vanilla JavaScript, MySQL, Python, Express, MongoDB</li>
                                <li className="resume-index-item-content-index-item">
                                    Talking to People</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Spanish, German, French, Latin, Ancient Greek</li>
                            </ul>
                        </div>
                        <div className="right-index-item">
                            <div className="resume-index-item-header-alignment-container">
                                <ul className="resume-index-item-header">
                                    <li className="resume-index-item-header-bold">Formal Education</li>
                                </ul>
                            </div>
                            <ul className="resume-index-item-content-index">
                                <li className="resume-index-item-content-index-item">
                                    App Academy (2017)</li>
                                <li className="resume-index-item-content-index-subitem">
                                    Rigorous 1000-hour full-stack development course with less than 3% acceptance rate</li>
                                <li className="resume-index-item-content-index-item">
                                    University of Chicago (2013)</li>
                                <li className="resume-index-item-content-index-subitem">
                                    B.A. Ancient Greek and Latin</li>
                                <li className="resume-index-item-content-index-subitem">
                                    summa cum laude</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="resume-footer">
                    <a
                        href="https://github.com/rsmease"
                        target="_blank">
                        <FontAwesome.FaGit className="resume-footer-icon raise" />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1vqpCQbfVO9IwSfEiLymdSHbcZcMkndEu/view?usp=sharing"
                        target="_blank" >
                        <FontAwesome.FaPrint className="resume-footer-icon raise" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ryan-mease-140b473a/"
                        target="_blank">
                        <FontAwesome.FaLinkedin className="resume-footer-icon raise" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Resume;