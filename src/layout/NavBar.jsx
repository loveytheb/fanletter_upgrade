import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setUserLogin } from 'redux/modules/authSlice';

export default function NavBar() {
  const dispatch = useDispatch();

  // 로그아웃
  const logoutClickHandler = () => {
    dispatch(setUserLogin(false));
  };

  return (
    <StNavBarContainer>
      <p>Home</p>
      <div>
        <p>내 프로필</p>
        <p onClick={logoutClickHandler}>로그아웃</p>
      </div>
    </StNavBarContainer>
  )
}

const StNavBarContainer = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700px;
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`