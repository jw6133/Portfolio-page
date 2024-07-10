import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContent = () => {

    const navigate=useNavigate();

    const goToPortfolio=()=>{
        navigate('/');
    }
    const goToInfo=()=>{
        navigate('/info');
    }
    const goToPPT=()=>{
        navigate('/ppt');
    }
    const goToResume=()=>{
        navigate('/resume');
    }

    return (
        <SideContentWrapper>
            <img src='photo/main_human_face.jpg'/>
            <span className='name'>백지웅</span>
            <span className='status'>가톨릭대학교 컴퓨터정보공학부</span>

            <div className='sideMenu'>
                <ul>
                    <li><img src='icon/clipboard.png'/> 포트폴리오 리스트</li>
                    <li><img src='icon/books.png'/> 세부정보</li>
                    <li><img src='icon/file-text.png'/> 이력서</li>
                    <li onClick={goToResume}><img src='icon/inbox.png'/> 주요 발표 자료</li>
                </ul>
            </div>
        </SideContentWrapper>
    );
};

export default SidebarContent;

const SideContentWrapper = styled.div`
    position:relative;
    color:white;
    background-color:#5e5e5e;
    img{
        position:relative;
        width:150px;
        height:150px;
        border-radius:50%;
        margin-left:40px;
        margin-top:40px;
    }
    .name{
        display:flex;
        position:absolute;
        right:20%;
        top:15%;
        font-size:48px;
    }
    .status{
        display:flex;
        position:absolute;
        right:10%;
        top:60%;
    }
    .sideMenu{
        color:white;
    }
`