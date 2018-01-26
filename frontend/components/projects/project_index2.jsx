import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

class ProjectIndex extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="project-index-container">
                <div className="diagonal-line-container">
                    <div className="diagonal-line-1"></div>
                </div>
                <div className="diagonal-line-container">
                    <div className="diagonal-line-2"></div>
                </div>
                <h1 className="project-index-title">Projects</h1>

                <div className="project-index-item-container">
                    <h1 className="project-index-item-title fade-in-first">Latin for Addicts</h1>
                    <div className="project-index-item fade-in-first latinforaddicts">
                        <div className="project-index-item-overlay">
                            <a className="view-project-button" href="https://latinforaddicts.wordpress.com" target="_blank">View Site</a>
                        </div>
                    </div>
                </div>
                <div className="project-index-item-container">
                    <h1 className="project-index-item-title fade-in-second">Ashai</h1>
                    <div className="project-index-item fade-in-second ashai">
                        <div className="project-index-item-overlay">
                            <a className="view-project-button" href="http://www.ashai.co" target="_blank">View Site</a>
                        </div>
                    </div >
                </div>
            </div>

        );
    }
}

export default ProjectIndex;