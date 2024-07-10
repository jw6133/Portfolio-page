import React from 'react';
import styled from 'styled-components';

const Foot = () => {
    return (
        <>
        <Footer>
            Footer
        </Footer>
        </>
    );
};

export default Foot;

const Footer=styled.div`
    position:relative;
    bottom:0;
    background-color:black;
    color:white;
    width:100%;
    height:200px;
`