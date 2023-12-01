import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { setModalType } from 'redux/modules/modal';
import { setUserLogin } from 'redux/modules/authSlice';
import { setUserData } from 'redux/modules/userData';
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Signin({ modalBackground, modalBackgroundOnclickHandler }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.authSlice.userLogin);

  const signupPageClickHandler = () => {
    dispatch(setModalType("signup"));
  }

  const onChange = (event) => {
    const {
      target : { name, value }
    } = event;
    if (name === "id") {
      setId(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  // 로그인
  const SigninFormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://moneyfulpublicpolicy.co.kr/login?expiresIn=10m`, {
        id,
        password,
      },
      // 로컬스토리지에 access_token 저장
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });
      if (response.data.accessToken) {
        localStorage.setItem('login-token', response.data.accessToken);
      }
      console.log("응답", response);
      if (response.status === 200) {
        dispatch(setUserLogin(true));
        // dispatch(setUserData(response.data.nickname));
      }
      console.log(response.data.nickname);
      alert("로그인에 성공하였습니다.");
    } catch (error) {
      console.log(error.message);
      alert("로그인에 실패하였습니다");
    }
  }
  
  return (
    <StSigninContent onSubmit={SigninFormSubmitHandler}>
      <StModalCloseBtn ref={modalBackground} onClick={modalBackgroundOnclickHandler}>
        <IoCloseCircleOutline />
      </StModalCloseBtn>
      <StSigninlTitle>로그인</StSigninlTitle>
      <StModalSigninInput
        type="text"
        value={id}
        name='id'
        onChange={onChange}
        required
        placeholder="아이디를 입력해주세요"
      />
      <StModalSigninInput
        type="password"
        value={password}
        name='password'
        onChange={onChange}
        required
        autoComplete="off"
        placeholder="비밀번호를 입력해주세요"
      />
      <StModalSignInBtn disabled={!(id && password)}>로그인</StModalSignInBtn>
      <StModalSignupBtn onClick={signupPageClickHandler}>회원가입</StModalSignupBtn>
    </StSigninContent>
  )
}

const StSigninContent = styled.form`
  background-color: white;
  width: 400px;
  height: 530px;
  border-radius: 20px;
`;
const StModalCloseBtn = styled.span`
  font-size: 35px;
  margin: 15px;
  cursor: pointer;
  background-color: transparent;
  float: right;
`;
const StSigninlTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 140px 145px 30px 155px;
`;
const StModalSigninInput = styled.input`
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;
`;
const StModalSignInBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;

  cursor: pointer;
`;
const StModalSignupBtn = styled.span`
  border-bottom: 1px solid black;
  margin-left: 280px;
  font-size: 13px;

  cursor: pointer;
`;
