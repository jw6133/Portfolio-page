import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function ToggleTheme() {
    const [isActive, setIsActive] = useState(true);

    const handleChange = () => {
        setIsActive(!isActive);
    };

    return (
        <ToggleSwitch>
            <CheckBox type="checkbox" checked={isActive} onChange={handleChange}></CheckBox>
            <ToggleSlider isActive={isActive}></ToggleSlider>
            <div className='light'>{isActive ? "Light" : ""}</div>
            <div className='dark'>{isActive ? "" : "Dark"}</div>
        </ToggleSwitch>
    );
}

export default ToggleTheme;

const ToggleSwitch = styled.label`
  position: absolute;
  top: 150px;
  right: 100px;
  display: inline-block;
  width: 400px;
  height: 86px;
  
  .light {
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: 3;
    font-size: 52px;
    color: black;
  }
  .dark {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 3;
    font-size: 52px;
    color:white;
  }
`;
const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content:  "";
    height: 66px;
    width: 190px;
    left: 10px;
    bottom: 10px;
    background-color: ${({ isActive }) => (isActive ? "black" : "white")};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: white;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #000000;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(189px);
    -ms-transform: translateX(189px);
    transform: translateX(189px);
  }
`;