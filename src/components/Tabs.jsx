import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setMember } from "redux/modules/member";

export default function Tabs() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onActiveMember = (event) => {
    if (event.target === event.currentTarget) return;

    dispatch(setMember(event.target.textContent));
  };
  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tab $activeMember={activeMember}>상연</Tab>
      <Tab $activeMember={activeMember}>제이콥</Tab>
      <Tab $activeMember={activeMember}>영훈</Tab>
      <Tab $activeMember={activeMember}>현재</Tab>
      <Tab $activeMember={activeMember}>주연</Tab>
      <Tab $activeMember={activeMember}>케빈</Tab>
      <Tab $activeMember={activeMember}>뉴</Tab>
      <Tab $activeMember={activeMember}>큐</Tab>
      <Tab $activeMember={activeMember}>학년</Tab>
      <Tab $activeMember={activeMember}>선우</Tab>
      <Tab $activeMember={activeMember}>에릭</Tab>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
`;

const Tab = styled.li`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: yellow;
        color: black;
      `;
    }
    return css`
      background-color: black;
      color: white;
    `;
  }}

  font-size: 20px;
  width: 80px;
  text-align: center;
  padding: 12px 6px;
  border-radius: 12px;
  cursor: pointer;
`;
