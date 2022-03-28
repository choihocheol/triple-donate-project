import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Swap() {
  return (
    <Container>
      <ContentContainer>Swap 페이지는 준비중입니다.</ContentContainer>
    </Container>
  );
}
