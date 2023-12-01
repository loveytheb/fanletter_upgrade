// import api from "axios/api";
import axios from "axios";
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModalType } from "redux/modules/modal";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Signup( { modalBackground, modalBackgroundOnclickHandler }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signinPageClickHandler = () => {
    dispatch(setModalType("signin"));
  }

  // 아이디, 닉네임, 비밀번호, 비밀번호 확인
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfirmPassword] = useState("");

  // 오류 메세지 상태
  const [idMessage, setIdMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [comfirmPasswordMessage, setComfirmPasswordMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isComfirmPassword, setIsComfirmPassword] = useState(false);

  // 아이디
  const onChangeId = useCallback((event) => {
    setId(event.target.value);
    if (event.target.value.length < 4 || event.target.value.length > 11) {
      setIdMessage("4글자 이상 10글자 이하로 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식입니다.");
      setIsId(true);
    }
  }, []);

  // 닉네임
  const onChangeNickname = useCallback((event) => {
    setNickname(event.target.value);
    if (event.target.value.length < 1 || event.target.value.length > 11) {
      setNicknameMessage("1글자 이상 10글자 이하로 입력해주세요.");
      setIsNickname(false);
    } else {
      setNicknameMessage("올바른 형식입니다.");
      setIsNickname(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((event) => {
    setPassword(event.target.value);
    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,15}$/.test(event.target.value)) {
      setPasswordMessage("숫자+영문자+특수문자(!@#$%^*+=-) 조합으로 4자리 이상 15 자리 이하로 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangeComfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value);
    if (password === event.target.value) {
      setComfirmPasswordMessage("비밀번호가 일치합니다.");
      setIsComfirmPassword(true);
    } else {
      setComfirmPasswordMessage("비밀번호가 일치하지 않습니다.");
      setIsComfirmPassword(false);
    }
  }, [password]);
  
  // 회원가입
  const signupFormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://moneyfulpublicpolicy.co.kr/register", {
        id,
        password,
        nickname,
      });
      console.log("응답", response);
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      signinPageClickHandler();
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패하였습니다.")
    }
  }

  return (
    <StSignupContent onSubmit={signupFormSubmitHandler} >
      <StModalCloseBtn ref={modalBackground} onClick={modalBackgroundOnclickHandler}>
        <IoCloseCircleOutline />
      </StModalCloseBtn>
      <StSignuplTitle>회원가입</StSignuplTitle>
      <StModalSignupput
        type="text"
        value={id}
        name='id'
        onChange={onChangeId}
        required
        placeholder="아이디"
      />
      {id.length > 0 && (
        <StWarningText className={`message ${isId ? "success" : "error"}`}>{idMessage}</StWarningText>
      )}
      <StModalSignupput
        type="text"
        value={nickname}
        name='nickname'
        onChange={onChangeNickname}
        required
        placeholder="닉네임"
      />
      {nickname.length > 0 && (
        <StWarningText className={`message ${isNickname ? "success" : "error"}`}>{nicknameMessage}</StWarningText>
      )}
      <StModalSignupput
        type="password"
        value={password}
        name='password'
        onChange={onChangePassword}
        required
        autoComplete='off'
        placeholder="비밀번호"
      />
      {password.length > 0 && (
        <StWarningText className={`message ${isPassword ? "success" : "error"}`}>{passwordMessage}</StWarningText>
      )}
      <StModalSignupput
        type="password"
        value={comfirmPassword}
        name='comfirmPassword'
        onChange={onChangeComfirmPassword}
        required
        autoComplete="off"
        placeholder="비밀번호를 입력해주세요"
      />
      {comfirmPassword.length > 0 && (
        <StWarningText className={`message ${isComfirmPassword ? "success" : "error"}`}>{comfirmPasswordMessage}</StWarningText>
      )}
      <StModalSignupBtn disabled={!(isId && isNickname && isPassword && isComfirmPassword)}>회원가입</StModalSignupBtn>
      <StModalSigninBtn onClick={signinPageClickHandler}>로그인</StModalSigninBtn>
    </StSignupContent>
  )
}

const StSignupContent = styled.form`
  background-color: white;
  width: 400px;
  height: 530px;
  border-radius: 20px;
`;
const StModalCloseBtn = styled.span`
  font-size: 30px;
  margin: 15px;
  cursor: pointer;
  background-color: transparent;
  float: right;
`;
const StSignuplTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 48px 125px 30px 145px;
`;
const StModalSignupput = styled.input`
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;
`;
const StWarningText = styled.div`
  font-size: 13px;
  margin: 5px 78px 5px 73px;
  &.success {
    transition: 0.1s;
    color: green;
  }
  &.error {
    transition: 0.1s;
    color: red;
  }
`;
const StModalSignupBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;

  cursor: pointer;
`;
const StModalSigninBtn = styled.span`
  border-bottom: 1px solid black;
  margin-left: 290px;
  font-size: 13px;

  cursor: pointer;
`;
