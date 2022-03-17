import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Nft from "../components/Nft";

const Container = styled.div`
  position: inherit;
  /* height: 1500px; */
  width: 100%;
  /* background-color: #e5e8eb; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  margin-top: 50px;
  width: 70%;
`;
const TopContainer = styled.div`
  width: 95%;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const ContentFont = styled.div`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 500;
`;
const UserContainer = styled.div`
  padding: 20px 0;
  margin: 0 30px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PostContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin: 70px 30px;
  justify-content: center;
  flex-direction: column;
`;
const MainContainer = styled.div`
  height: 100%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const BottomContainer = styled.div`
  padding: 20px 20px;
  border-top: 0.5px solid #a9a9a9;
  background-color: #fff;
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled.div`
  background-color: #393b45;
  height: 450px;
  width: 350px;
  margin: 10vh auto;
  border-radius: 25px;
  padding-bottom: 1px;
  box-shadow: 2px 2px 5px #4069e2;
`;
const NftContainer = styled.div`
  margin: 0 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  margin-bottom: 60px;
`;

export default function Mypage() {
  return (
    <Container>
      <HeaderContainer>
        <ContentFont>내 정보</ContentFont>
        <Divider />
        <TopContainer>
          <UserContainer>
            <UserInfo></UserInfo>
          </UserContainer>
          <PostContainer>
            <ContentFont>나의 프로젝트</ContentFont>
            <Divider />
            <MainContainer>
              <div style={{ padding: "130px 0" }}>
                <div style={{ fontSize: "22px", fontWeight: "500" }}>작성한 프로젝트가 없습니다</div>
              </div>
            </MainContainer>
          </PostContainer>
        </TopContainer>
      </HeaderContainer>
      <BottomContainer>
        <ContentFont>나의 NFT</ContentFont>

        <NftContainer>
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
        </NftContainer>
      </BottomContainer>
    </Container>
  );
}
