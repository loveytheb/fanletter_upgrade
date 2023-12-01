import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import LetterCard from "./LetterCard";
import { useEffect } from "react";
import { __getLetters } from "redux/modules/letterSlice";

export default function LetterList() {
  const activeMember = useSelector((state) => state.member);

  const dispatch = useDispatch();
  const { isLoading, error, letters } = useSelector((state) => state.letterSlice);

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>{error.Message}</div>;
  }

  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  console.log(filteredLetters);
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
          되보세요!
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;