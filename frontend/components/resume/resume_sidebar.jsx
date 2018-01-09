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
                        <div className="resume-sidebar-index-item-header-alignment-container">
                            <h1 className="resume-sidebar-index-item-big-title">Ashai</h1>
                            <h3 className="resume-sidebar-index-item-little-title">Individual Project</h3>
                            <a href="http://www.ashai.co" target="_blank" className="resume-sidebar-index-item-little-title resume-link underline">http://www.ashai.co</a>
                        </div>
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
                        <div className="resume-sidebar-index-item-header-alignment-container">
                            <h3 className="resume-sidebar-index-item-little-title">2017</h3>
                            <h1 className="resume-sidebar-index-item-big-title">App Academy</h1>
                        </div>
                        <p className="resume-sidebar-index-item-content">
                            Selective full-stack bootcamp
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            Web development, OOP, algorithm design
                        </p>
                    </div>
                    <div className="resume-sidebar-index-item">
                        <div className="resume-sidebar-index-item-header-alignment-container">
                            <h3 className="resume-sidebar-index-item-little-title">2013</h3>
                            <h1 className="resume-sidebar-index-item-big-title">University of Chicago</h1>
                        </div>
                        <p className="resume-sidebar-index-item-content">
                            BA, Greek and Latin
                        </p>
                    </div>
                </div>
                <div className="resume-sidebar-divider"></div>
                <div className="resume-sidebar-index">
                    <h1 className="resume-sidebar-title">Skills</h1>
                    <div className="resume-sidebar-index-item">
                        <div className="resume-sidebar-index-item-header-alignment-container">
                            <h3 className="resume-sidebar-index-item-big-title">Talking to Computers</h3>
                        </div>
                        <p className="resume-sidebar-index-item-content underline">Advanced</p>
                        <p className="resume-sidebar-index-item-content">
                            React, Redux, JavaScript (ES6), npm
                        </p>
                        <p className="resume-sidebar-index-item-content">
                            Ruby, Rails, HTML5, CSS3, PostgreSQL, git
                        </p>
                        <br />
                        <p className="resume-sidebar-index-item-content underline">Basic</p>
                        <p className="resume-sidebar-index-item-content">
                            Express, MongoDB, jQuery, Vanilla JavaScript
                        </p>
                    </div>
                    <div className="resume-sidebar-index-item">
                        <div className="resume-sidebar-index-item-header-alignment-container">
                            <h3 className="resume-sidebar-index-item-big-title">Talking to People</h3>
                        </div>
                        <p className="resume-sidebar-index-item-content underline">Advanced</p>
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