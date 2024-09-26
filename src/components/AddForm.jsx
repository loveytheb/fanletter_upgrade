import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function AddForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [member, setMember] = useState("상연");

  const [lettercards, setLetterCards] = useState(null);

  // 조회함수
  const fetchLetters = async () => {
    const {data} = await axios.get(`http://localhost:4000/letters`);
    setLetterCards(data);    
  }

  useEffect(() => {
    fetchLetters();
  }, []);

  // 추가함수
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const response = axios.post(`http://localhost:4000/letters`, {
      content,
      writedTo: member,
    });
    console.log("편지",response);
    fetchLetters();
    alert("새로운 글이 등록되었습니다.")
  }

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <InputWrapper>
          <label>내용:</label>
          <textarea
            placeholder="최대 100글자까지 작성할 수 있습니다."
            maxLength={100}
            onChange={(event) => setContent(event.target.value)}
            value={content}
          />
        </InputWrapper>
        <SelectWrapper>
          <label>누구에게 보내실 건가요?</label>
          <select onChange={(event) => setMember(event.target.value)}>
            <option>상연</option>
            <option>제이콥</option>
            <option>영훈</option>
            <option>현재</option>
            <option>주연</option>
            <option>케빈</option>
            <option>뉴</option>
            <option>큐</option>
            <option>학년</option>
            <option>선우</option>
            <option>에릭</option>
          </select>
        </SelectWrapper>
        <Button text="팬레터 등록" />
      </Form>
    </>
  );
}

const Form = styled.form`
  background-color: gray;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    padding: 12px;
  }
  & textarea {
    resize: none;
    height: 100px;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  margin-top: 10px;
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`;
