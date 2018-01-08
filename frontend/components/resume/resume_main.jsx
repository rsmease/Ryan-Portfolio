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
                            <h3 className="resume-main-index-item-little-title">12/17 -</h3>
                            <h1 className="resume-main-index-item-big-title">App Academy</h1>
                            <h3 className="resume-main-index-item-little-title">Teaching Assistant</h3>
                        </div>
                        <p className="resume-main-index-item-content">
                            Teach web development curriculum
                        </p>
                        <p className="resume-main-index-item-content">
                            Lecture students on assessment strategies
                        </p>
                        <p className="resume-main-index-item-content">
                            Review student programming assignments
                        </p>
                    </div>
                    <div className="resume-main-index-item">
                        <div className="resume-main-index-item-header-alignment-container">
                            <h3 className="resume-main-index-item-little title">08/15 - 10/17</h3>
                            <h1 className="resume-main-index-item-big-title">Airbus Group, Inc.</h1>
                            <h3 className="resume-main-index-item-little-title">Operations Manager</h3>
                        </div>
                        <p className="resume-main-index-item-content">
                            Founding employee, aerospace research lab
                        </p>
                        <p className="resume-main-index-item-content">
                            Managed procurement, accounts payable staff
                        </p>
                        <p className="resume-main-index-item-content">
                            Oversaw build of public website, internal wiki
                        </p>
                    </div>
                    <div className="resume-main-index-item">
                        <div className="resume-main-index-item-header-alignment-container">
                            <h3 className="resume-main-index-item-little title">12/13 - 08/15</h3>
                            <h1 className="resume-main-index-item-big-title">Stanford University</h1>
                            <h1 className="resume-main-index-item-big-title">Department of Computer Science</h1>
                            <h3 className="resume-main-index-item-little-title">Student Services Specialist</h3>
                        </div>
                        <p className="resume-main-index-item-content">
                            Maintained department webpages
                        </p>
                        <p className="resume-main-index-item-content">
                            Maintained MySQL database of 1000s of records
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumeMain;