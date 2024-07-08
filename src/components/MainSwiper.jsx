import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // 스와이퍼 적용 import (ctrl space?)
import 'swiper/css'; // 스와이퍼 기본 css 적용 임포트
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation'; // 스와이퍼 좌우버튼 css
import 'swiper/css/pagination'; // 스와이퍼 도트리스트 css
import '../style/swiperCustomCss.css';
import styled from 'styled-components';

const MainSwiper = () => {
    return (
        <PhotoContainer>
            <StyledSwiper
                spaceBetween={10} // 슬라이드 간의 여백(gap)
                slidesPerView={1} // 한번에 보여질 슬라이드 아이템의 갯수
                slidesPerGroup={1} // 슬라이드 이동시 한번에 움직일 슬라이드 아이템의 갯수
                loop // 무한반복
                modules={[Navigation, Pagination]} // 모듈 가져오기
                navigation // 실제 적용
                pagination
            >
                <SwiperSlide>
                    <StyledImg src='ProjectThumbnail/chull.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg src='ProjectThumbnail/farmfarm.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg src='ProjectThumbnail/KIST.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg src='ProjectThumbnail/lets_go_now.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg src='ProjectThumbnail/jrgb.png' />
                </SwiperSlide>
            </StyledSwiper>
        </PhotoContainer>
    );
};

export default MainSwiper;

const PhotoContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 150px 0 auto;
    overflow: hidden; // Swiper 크기를 초과하는 내용을 숨김

`;

const StyledSwiper = styled(Swiper)`
    height: 400px;
    margin:0 auto;
`;

const StyledImg = styled.img`
    width: 100%;
    max-width: 1440px;
    height: 400px;
    object-fit: cover; // 이미지가 고정된 크기에 맞게 잘리거나 확대되도록 설정
`;
