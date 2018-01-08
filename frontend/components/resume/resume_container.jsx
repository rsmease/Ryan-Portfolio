import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Router, Link } from 'react-router-dom';

//components
import ResumeHeader from './resume_header';
import ResumeSidebar from './resume_sidebar';
import ResumeMain from './resume_main';
import ResumeFooter from './resume_footer';

class Resume extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        document.title = "Ryan Mease - Resume";
    }

    render() {
        return (
            <div className='resume-container'>
                <ResumeHeader />
                <div className='resume-body-container'>
                    <ResumeSidebar />
                    <ResumeMain />
                    <div className="line-right-1"></div>
                    <div className="line-right-2"></div>
                    <div className="line-right-3"></div>
                </div>
                <ResumeFooter />
            </div>
        );
    }
}

export default Resume;