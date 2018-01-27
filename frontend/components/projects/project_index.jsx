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
                    <div className="project-index-item-description fade-in-first">
                        <p>A Wordpress site <span className="great-content">used by hundreds of educators world wide</span>. This was my first foray into hosting content on the world wide web. I digitized an old but popular Latin textbook, summarizing articles on topics ranging from <span className="great-content">morphology to syntax to etymological histories</span>.</p>
                    </div>
                </div>
                <div className="project-index-item-container">
                    <h1 className="project-index-item-title fade-in-second">Ashai</h1>
                    <div className="project-index-item fade-in-second ashai">
                        <div className="project-index-item-overlay">
                            <a className="view-project-button" href="http://www.ashai.co" target="_blank">View Site</a>
                        </div>
                    </div >
                    <div className="project-index-item-description fade-in-second">
                        <p>A <span className="great-content">React on Rails</span> site that highlights my latest skills. The app makes use of a <span className="great-content">Redux store and PostgreSQL API</span>. User authentication is managed on the front-end. <span className="great-content">The UI was built from the ground up</span>, with minimal reliance on third-party package templates.</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProjectIndex;