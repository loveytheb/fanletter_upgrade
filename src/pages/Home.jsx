import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "layout/NavBar";

export default function Home() {
  return (
    <>
      <Container>
        <NavBar />
        <Header />
        <AddForm />
        <LetterList />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
