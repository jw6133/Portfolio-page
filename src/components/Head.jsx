import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SidebarContent from './SidebarContent';

const Head = () => {
    return (
        <HeadWrapper>
            <span>Portfolio</span>
            <Sidebar width={480}>
                <SidebarContent/>
            </Sidebar>
        </HeadWrapper>
    );
};

export default Head;

const HeadWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    background-color: gray;
    width: 100%;
    z-index: 3;
`;


