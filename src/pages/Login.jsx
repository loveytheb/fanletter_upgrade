import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/common/Modal';
import AuthBtns from 'components/AuthBtns';
import { useSelector } from 'react-redux';

export default function Login() {
  const modalOpen = useSelector((state) => state.modal.modalOpen);

  return (
    <>
      <StinupBtn>
        <AuthBtns />
      </StinupBtn>
      {
        modalOpen && <Modal />
      }
    </>
  )
}

const StinupBtn = styled.div`
  background-color: lightgray;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StModalBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 250px;
  height: 40px;
  margin: 5px 80px 0 75px;

  cursor: pointer;
  margin-left: auto;
`