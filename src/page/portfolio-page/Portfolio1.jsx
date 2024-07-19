import React, { useEffect, useState } from 'react';
import Head from '../../components/Head';
import styled from 'styled-components';
import CellPeopleTable from '../../components/cell_detail_c/CellPeopleTable';
import { getPortfolioData } from '../../api/firebase';

const Portfolio1 = () => {
    const [firebaseData, setFirebaseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPortfolioData();
            // 데이터를 성공적으로 가져왔을 때 상태를 설정합니다. 여기서는 첫 번째 데이터를 사용합니다.
            if (data.length > 0) {
                setFirebaseData(data[0]);
            }
        };

        fetchData();
    }, []);

    if (!firebaseData) {
        return <img src='photo/loading.gif'/>;
    }

    return (
        <>
            <Head />
            <Container>
                <span className='title'>{firebaseData.title}</span>
                <span className='tag'>{firebaseData.tag}</span>
                <p className='text1'>{firebaseData.text1}</p>
                <CellPeopleTable data={firebaseData.table} />
                <p className='text2'>{firebaseData.text2}</p>
            </Container>
        </>
    );
};

export default Portfolio1;

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 5%;
    .title {
        position: relative;
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 2%;
    }
    .tag {
        position: relative;
        font-size: 16px;
        margin-bottom: 2%;
    }
    .text1 {
        margin-bottom: 2%;
    }
    .text2 {
        margin-bottom: 2%;
    }
`;
