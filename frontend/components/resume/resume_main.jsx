import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

class ResumeMain extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="resume-main">
                <div className="resume-main-index">
                    <h1 className="resume-main-title">Experience</h1>
                    <div className="resume-main-index-item">
                        <div className="resume-main-index-item-header-alignment-container">
                            <h3 className="resume-main-index-item-little-title-date">12/17 -</h3>
                            <h1 className="resume-main-index-item-big-title">App Academy</h1>
                            <h3 className="resume-main-index-item-little-title">Software Engineering TA</h3>
                        </div>
                        <p className="resume-main-index-item-content">
                            Teach engineering curriculum
                        </p>
                        <li className="resume-main-index-item-content-detail">
                            Ruby on Rails, React, algorithms, data structures
                        </li>
                        <p className="resume-main-index-item-content">
                            Lecture students on assessment strategies
                        </p>
                        <p className="resume-main-index-item-content">
                            Mentor students building full-stack web applications
                        </p>
                        <li className="resume-main-index-item-content-detail">
                            Discuss design trade-offs, memory and performance
                        </li>
                    </div>
                    <div className="resume-main-index-item">
                        <div className="resume-main-index-item-header-alignment-container">
                            <h3 className="resume-main-index-item-little-title-date">08/15 - 10/17</h3>
                            <h1 className="resume-main-index-item-big-title">Airbus Group, Inc.</h1>
                            <h3 className="resume-main-index-item-little-title">Operations Manager</h3>
                        </div>
                        <p className="resume-main-index-item-content">
                            Founding employee, aerospace start-up
                        </p>
                        <li className="resume-main-index-item-content-detail">
                            Scaled from 4 to 100 employees in 18 months
                        </li>
                        <p className="resume-main-index-item-content">
                            Managed procurement, accounts payable staff (3 reports)
                        </p>
                        <li className="resume-main-index-item-content-detail">
                            $10K unrestricted signing authority, $1-3M annual spending
                        </li>
                        <p className="resume-main-index-item-content">
                            Oversaw build of public website, internal website
                        </p>
                        <li className="resume-main-index-item-content-detail">
                            Ruby on Rails, HTML5 and CSS3, localized for global audience
                        </li>
                    </div>
                    <div className="resume-main-index-item">
                        <div className="resume-main-index-item-header-alignment-container">
                            <h3 className="resume-main-index-item-little-title-date">12/13 - 08/15</h3>
                            <h1 className="resume-main-index-item-big-title">Stanford University</h1>
                            <h1 className="resume-main-index-item-big-title">Department of Computer Science</h1>
                            <h3 className="resume-main-index-item-little-title">Student Services Specialist</h3>
                        </div>
                        <p className="resume-main-index-item-content">
                            Built and maintained department webpages using Vi, HTML4, CSS2
                        </p>
                        <p className="resume-main-index-item-content">
                            Supported courses with more than 500 enrolled students
                        </p>
                        <li className="resume-main-index-item-content-detail">
                            Centralized and managed student disability accommodations
                        </li>
                        <p className="resume-main-index-item-content">
                            Maintained MySQL database of 1000s of student records
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumeMain;