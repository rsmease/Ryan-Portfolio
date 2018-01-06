import React from 'react';
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
                            <ul className="resume-index-item-header">
                                <li className="resume-index-item-header-bold">App Academy</li>
                                <li className="resume-index-item-header-detail">Teaching Assistant</li>
                                <li className="resume-index-item-header-detail">12/2017 -</li>
                            </ul>
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
                            <ul className="resume-index-item-header">
                                <li className="resume-index-item-header-bold">Airbus Group Inc.</li>
                                <li className="resume-index-item-header-detail">Operations Manager</li>
                                <li className="resume-index-item-header-detail">08/15 - 10/17</li>
                            </ul>
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
                            <ul className="resume-index-item-header">
                                <li className="resume-index-item-header-bold">Stanford University</li>
                                <li className="resume-index-item-header-detail">Department of Computer Science</li>
                                <li className="resume-index-item-header-detail">Student Services Specialist</li>
                                <li className="resume-index-item-header-detail">08/15 - 10/17</li>
                            </ul>
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
                </div>
            </div>
        );
    }
}

export default Resume;