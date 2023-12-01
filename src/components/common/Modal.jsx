import React, { useRef } from 'react'
import styled from 'styled-components'
import Signin from 'components/Signin';
import Signup from 'components/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen } from'redux/modules/modal';

export default function Modal({}) {
  const dispatch = useDispatch();
  const madalType = useSelector((state) => state.modal.modalType);
  const modalBackground = useRef();

  const modalBackgroundOnclickHandler = () => {
        dispatch(setModalOpen(false));
  };

  return (
    <div>
      <StModalContainer>
          {madalType === "signin" && (
            <Signin
              modalBackground={modalBackground}
              modalBackgroundOnclickHandler={modalBackgroundOnclickHandler}  
            />
          )}
          {madalType === "signup" && (
            <Signup
              modalBackground={modalBackground}
              modalBackgroundOnclickHandler={modalBackgroundOnclickHandler}  
            />
          )}
        </StModalContainer>
    </div>
  )
}

const StModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`