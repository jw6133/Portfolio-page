import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Sidebar = ({ width , children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <Container>
      <div
        ref={side}
        className="sidebar"
        style={{ width: `${width}px`, height: "100%", transform: `translateX(${-xPosition}px)` }}
      >
        <SideButtonWrapper isOpen={isOpen} onClick={toggleMenu}>
          <div>
            <i className="line01"></i>
            <i className="line02"></i>
          </div>
        </SideButtonWrapper>
        <div className="content">{children}</div>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: #e3ecf1;
  position: absolute;
  top: 0;
  right: 0;

  .sidebar {
    background-color: #5e5e5e;
    position: fixed;
    top: 0;
    right: 0;
    transition: 0.4s ease;
    color: #202020;
    height: 100%;
    z-index: 99;
  }

  .content {
    padding: 40px 40px 0 20px;
    position: relative;
    width: 100%;
  }
`;

const SideButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: -60px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;

  div {
    width: 36px;
    height: 13px;
    position: relative;

    i {
      width: 36px;
      height: 4px;
      background-color: white;
      position: absolute;
      transition: 500ms;
    }
    .line01 {
      top: ${({ isOpen }) => (isOpen ? '50%' : '0%')};
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%) rotate(45deg)' : 'none')};
    }
    .line02 {
      top: ${({ isOpen }) => (isOpen ? '50%' : '100%')};
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%) rotate(-45deg)' : 'none')};
    }
  }

  &:before {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.3);
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
