import React from 'react';
import { Router, Link } from 'react-router-dom';

class Splash extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        document.title = "Ryan Mease - Welcome";
    }

    render() {
        return (
            <div className="splash-container">
                <h1 className="splash-title fade-in-first">Ryan Mease</h1>
                <div className="splash-links-container">
                    <Link to="/resume" className="splash-link fade-in-second">Resume</Link>
                    <Link to="/projects" className="splash-link fade-in-second">Projects</Link>
                </div>
            </div>
        );
    }
}

export default Splash;
