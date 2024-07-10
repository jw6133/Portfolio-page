import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Foot from '../components/Foot';

const Presentation = () => {
    return (
        <>
        <Head/>
        <PresentationWrapper>
            Presentation
        </PresentationWrapper>
        <Foot/>
        </>
    );
};

export default Presentation;

const PresentationWrapper=styled.div`
    margin-top:150px;
`