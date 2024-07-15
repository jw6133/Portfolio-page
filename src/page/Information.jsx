import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Foot from '../components/Foot';

const Information = () => {
    return (
        <>
        <Head/>
        <InformationWrapper>
            
        </InformationWrapper>
        <Foot/>
        </>
        
    );
};

export default Information;

const InformationWrapper = styled.div`
    width:100%;
    height:100%;
    margin-top:150px;
`