import React from 'react';
import styled from 'styled-components';

function PortfolioCellSRC({ portfolioData }) {
    return (
        <CellInfoWrapper>
            <img src={portfolioData.src} alt={portfolioData.alt} />
            <div className="portfolioText">
                <span className="portfolioTitle">{portfolioData.headText}</span>
                <span className="mainText">{portfolioData.bodyText}</span>
            </div>
        </CellInfoWrapper>
    );
}

export default PortfolioCellSRC;

const CellInfoWrapper = styled.div`
    width: 380px;
    height: 480px;
    border: solid 1px black;
    overflow: hidden;
    transition: transform 0.3s ease; 

    &:hover {
        transform: scale(1.1); 
    }

    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }

    .portfolioText {
        height: 100%;
        width:90%;
        margin-left:5%;
        text-align: center;
        font-size: 20px;
        word-break: keep-all;

        .portfolioTitle {
            display: block;
            margin-top: 5px;
            text-align:left;
            font-weight: bold;
            font-size: 24px;
        }

        .mainText {
            margin-top: 5px;
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
