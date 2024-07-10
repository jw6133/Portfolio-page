import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Foot from '../components/Foot';

const Information = () => {
    return (
        <>
        <Head/>
        <InformationWrapper>
            Infomation
        </InformationWrapper>
        <Foot/>
        </>
        
    );
};

export default Information;

const InformationWrapper = styled.div`
    margin-top:150px;
`