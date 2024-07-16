import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// PDF.js 글로벌 워커 설정
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pages, setPages] = useState([]);
    const [ppt, setPPT] = useState("farmfarm");
    const [pageNumber, setPageNumber] = useState(1);

    const pptList = [
        { key: "farmfarm", src: "/etc/farmfarm_pitchdeck.pdf" },
        { key: "gdsc", src: "/etc/gdsc_algorithm.pdf" }
    ];

    useEffect(() => {
        const loadPdf = async () => {
            const selectedPpt = pptList.find(item => item.key === ppt);
            if (selectedPpt) {
                const loadingTask = pdfjsLib.getDocument(selectedPpt.src);
                const pdf = await loadingTask.promise;
                setNumPages(pdf.numPages);

                const loadedPages = [];
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    loadedPages.push(page);
                }
                setPages(loadedPages);
                setPageNumber(1); // 페이지 번호를 초기화합니다.
            }
        };

        loadPdf();
    }, [ppt]);

    const handleSelectChange = (event) => {
        setPPT(event.target.value);
        setPageNumber(1); // 선택이 변경될 때 페이지 번호를 초기화합니다.
    };

    return (
        <Container>
            <select value={ppt} onChange={handleSelectChange}>
                <option key="farmfarm" value="farmfarm">창업동아리 - 팜팜</option>
                <option key="gdsc" value="gdsc">GDSC - 세미 해커톤</option>
            </select>
            {numPages && (
                <SwiperContainer key={ppt}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        initialSlide={pageNumber - 1} // Swiper 초기 슬라이드를 설정합니다.
                    >
                        {pages.map((page, index) => (
                            <SwiperSlide key={index}>
                                <CanvasWrapper>
                                    <canvas
                                        ref={canvas => {
                                            if (canvas) {
                                                const viewport = page.getViewport({ scale: 1.5 });
                                                const context = canvas.getContext('2d');
                                                canvas.height = viewport.height;
                                                canvas.width = viewport.width;

                                                const renderContext = {
                                                    canvasContext: context,
                                                    viewport,
                                                };
                                                page.render(renderContext);
                                            }
                                        }}
                                    />
                                </CanvasWrapper>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperContainer>
            )}
        </Container>
    );
};

export default PdfViewer;

const Container = styled.div`
    width: 70%;
    height: 70%;
    margin: 3% auto 3% auto;
    overflow:hidden;
    select {
        position: relative;
        left: 3%;
        margin-bottom: 2%;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const SwiperContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const CanvasWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    canvas {
        max-width: 100%;
        height: auto;
    }
`;