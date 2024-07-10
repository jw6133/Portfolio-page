import React from 'react';
import styled from 'styled-components';

const Head = () => {
    return (
        <HeadWrapper>
            <span>Portfolio</span>
            <SideButtonWrapper>
                    <div>
                        <i className="line01"></i>
                        <i className="line02"></i>
                    </div>
            </SideButtonWrapper>
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

const SideButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 40px;
    width: 44px; //x 크기 조절
    height: 100%;
    display: flex;
    align-items: center;

        div {
            width: 44px;
            height: 13px;
            position: absolute;
            top: 50%;
            left:0;
            transform: translateY(-50%);

            i {
                width: 44px;
                height: 2px;
                background-color: white;
                position: absolute;
                transition: 500ms;
                transform-origin: center; /* 회전 중심점 설정 */
            }
            .line01 {
                top: 0%;
                transform-origin: center; /* 회전 중심점 설정 */
            }
            .line02 {
                top: 100%;
                transform-origin: center; /* 회전 중심점 설정 */
            }
        }

    &:hover {
        .line01 {
            top: 50%;
            transform: translateY(0%) rotate(45deg);
        }
        .line02 {
            top: 50%;
            transform: translateY(0%) rotate(-45deg);
        }
    }

    &:before {
        width: 2px;
        height: 20px;
        background: rgba(255, 255, 255, 0.3);
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
`;
