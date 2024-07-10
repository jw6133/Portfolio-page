import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Foot from '../components/Foot';

const Resume = () => {
    return (
        <>
        <Head/>
        <ResumeWrapper>
            Resume
        </ResumeWrapper>
        <Foot/>
        </>
    );
};

export default Resume;

const ResumeWrapper=styled.div`
    margin-top:150px;
`