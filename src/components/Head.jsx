import React from 'react';
import styled from 'styled-components';

const Head = () => {
    return (
        <HeadWrapper>
            <span>Portfolio</span>
        </HeadWrapper>
    );
};

export default Head;

const HeadWrapper = styled.div`
    position:fixed;
    height:100px;
    background-color:gray;
    width:100%;
    
`