import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setModalType } from'redux/modules/modal'
import { setModalOpen } from 'redux/modules/modal'

export default function AuthBtns({}) {
  const dispatch = useDispatch();

  const signinClickHandler = () => {
    dispatch(setModalOpen(true));
    dispatch(setModalType("signin"));
    console.log("로그인");
  };
  
  const signupClickHandler = () => {
    dispatch(setModalOpen(true));
    dispatch(setModalType("signup"));
  };

  return (
    <StLoginContent>
        <StLoginSignupBtn onClick={signinClickHandler}>로그인</StLoginSignupBtn>
        <StLoginSignupBtn onClick={signupClickHandler}>회원가입</StLoginSignupBtn>
    </StLoginContent>
  )
}

const StLoginContent = styled.div`
  background-color: white;
  width: 400px;
  height: 300px;
  border-radius: 20px;
  padding-top: 83px;
`
const StLoginSignupBtn = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  border: 2px solid black;
  border-radius: 30px;
  width: 280px;
  height: 60px;
  margin: 5px 60px 0 50px;

  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`