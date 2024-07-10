import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SidebarContent from './SidebarContent';
import { useNavigate } from 'react-router-dom';

const Head = () => {

    const navigate=useNavigate();

    const goToPortfolio=()=>{
        navigate('/');
    }

    return (
        <HeadWrapper>
            <span className="mainLogo" onClick={goToPortfolio}>Portfolio</span>
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
    .mainLogo{
        font-size:48px;
        font-weight:bold;
        &:hover{
            color:yellow;
        }
    }
`;


