import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Foot from '../components/Foot';
import Table from '../components/information_c/Table';

const Information = () => {
    const schoolData = [
        { '재학기간': '2017.03-2020.02', '학교명': '보인고등학교', '전공 및 수료과정': '', '소재지': '서울 송파구' },
        { '재학기간': '2020.03-2025.02', '학교명': '가톨릭대학교 성심교정', '전공 및 수료과정': '컴퓨터정보공학부', '소재지': '부천시 원미구' },
      ];

      const socialData = [
        {'활동기간':'2021.09-2022.07','활동구분':'교내 창업동아리','기관':'가톨릭대학교','활동내용':'모바일 스마트팜 스타트업 창업동아리'},
        {'활동기간':'2023.07-2023.08','활동구분':'포용성장 전문연구인력양성사업','기관':'KIRD, KIST','활동내용':'KIST 기관 내 연구보조'},
        {'활동기간':'2021.09-2022.07','활동구분':'교내 창업동아리','기관':'가톨릭대학교','활동내용':'모바일 스마트팜 스타트업 창업동아리'}
      ];
    return (
        <>
        <Head/>
        <InformationWrapper>
            <span className='sectionTitle'>학력사항</span>
            <Table data={schoolData}/>
            <span className='sectionTitle'>사회경험</span>
            <Table data={socialData}/>
        </InformationWrapper>
        <Foot/>
        </>
        
    );
};

export default Information;

const InformationWrapper = styled.div`
    width:100%;
    height:100%;
    margin-top:6%;
    .sectionTitle{
        display:flex;
        position: relative;
        left:10%;
        margin-bottom:3%;
        font-size:48px;
        font-weight:bold;
    }
`