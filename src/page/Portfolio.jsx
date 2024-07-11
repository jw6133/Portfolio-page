import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import MainSwiper from '../components/MainSwiper';
import PortfolioCell from '../components/PortfolioCell';
import Foot from '../components/Foot';

const Portfolio = () => {
    return (
        <>
        <PortfolioWrapper>
            <Head/>
            <MainSwiper/>
            <CellWrapper>
                <PortfolioCell/>
            </CellWrapper>
            {/* <FootWrapper>
                footer
            </FootWrapper> */}
            <Foot/>
        </PortfolioWrapper>
        </>
    );
};

export default Portfolio;

const PortfolioWrapper=styled.div`
    
`

const CellWrapper = styled.div`

`
// const FootWrapper=styled.div`
//     position:relative;
//     bottom:0;
//     background-color:black;
//     color:white;
//     width:100%;
//     height:200px;
// `
