import { Avatar, Backdrop, CircularProgress, Divider, List, Typography } from "@mui/material/";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nft from "../components/Nft";
import Post from "../components/Post";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: inherit;
  width: 100%;
  min-height: 800px;
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
  /* background-color: #a9a9a9; */

  height: 450px;
  width: 330px;
  margin: 10vh auto;
  border-radius: 25px;
  padding-bottom: 1px;
  box-shadow: 1px 3px 3px 3px #919191;
`;
const NftContainer = styled.div`
  margin: 0 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  margin-bottom: 60px;
`;
const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #e6ebee;
  width: 130px;
  height: 130px;
  margin: 40px auto;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 1.2px 1.2px 1.2px 1px #919191;
`;
const Profile = styled.img`
  display: inline;
  height: 230px;
  width: auto;
  margin-left: -34px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 230px;
  /* background-color: #2c2c2c; */
`;
const InfoContents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: row;
  width: 90%;
  height: 90px;
  /* background-color: white; */
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
  /* background-color: #2c2c2c; */
`;
const UserNameFont = styled.div`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 600;
`;
const TitleFont = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;
const DescFont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #2c2c2c;
`;

export default function Mypage() {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(true);
  const [myProject, setMyProject] = useState([]);
  const [contribute, setContribute] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4999/user/mylist")
      .then((res) => {
        setMyProject(res.data.userData.nftList.filter((e) => e[1] === 1));
        setContribute(res.data.userData.nftList.filter((e) => e[1] === 0));
        setUser(res.data);
        console.log(res.data);
        setOpen(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {open ? (
        <Backdrop sx={{ color: "#fff", zIndex: 1 }} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <HeaderContainer>
            <ContentFont>내 정보</ContentFont>
            <Divider />
            <TopContainer>
              <UserContainer>
                <UserInfo>
                  <ProfileContainer></ProfileContainer>

                  <InfoContainer>
                    <UserNameFont>{user.userData.userName}</UserNameFont>
                    <InfoContents style={{ borderTop: "1px solid rgba(0,0,0,0.3)" }}>
                      <InfoContent>
                        <TitleFont>나의 프로젝트</TitleFont>
                        <DescFont>{myProject.length} </DescFont>
                      </InfoContent>
                      <InfoContent>
                        <TitleFont>기여한 프로젝트</TitleFont>
                        <DescFont>{contribute.length}</DescFont>
                      </InfoContent>
                    </InfoContents>
                    <InfoContents>
                      <InfoContent>
                        <TitleFont>TDT</TitleFont>
                        <DescFont>
                          {user.userData.balance === 0 ? "0" : user.userData.balance}
                          <Avatar sx={{ ml: 0.5, width: "17px", height: "17px" }} alt="share" src="http://temp20.zsol.co.kr/icon_img/share01.svg" />
                        </DescFont>
                      </InfoContent>
                      <InfoContent>
                        <TitleFont>NFT</TitleFont>
                        <DescFont>
                          {user.nftData.length === 0 ? "0" : user.nftData.length}{" "}
                          <Avatar sx={{ ml: 0.5, width: "17px", height: "17px" }} alt="trophy" src="http://temp20.zsol.co.kr/icon_img/trophy.svg" />
                        </DescFont>
                      </InfoContent>
                    </InfoContents>
                  </InfoContainer>
                </UserInfo>
              </UserContainer>
              <PostContainer>
                <ContentFont>나의 프로젝트</ContentFont>
                <Divider />
                <List sx={{ width: "100%", minWidth: 500, mt: 2 }}>
                  {user.postData ? (
                    user.postData.map((e) => {
                      return <Post id={e.seq} seq={e.seq} title={e.title} desc={e.nftDescription} imgAddr={e.nftImageIpfsAddr} />;
                    })
                  ) : (
                    <div style={{ padding: "130px 0" }}>
                      <div style={{ fontSize: "22px", fontWeight: "500" }}>작성한 프로젝트가 없습니다</div>
                    </div>
                  )}
                </List>
              </PostContainer>
            </TopContainer>
          </HeaderContainer>
          <BottomContainer>
            <ContentFont>나의 NFT</ContentFont>

            <NftContainer>
              {user.nftData ? user.nftData.map((e) => <Nft title={e.nftName} desc={e.nftDescription} img={e.nftImageIpfsAddr} />) : <div>ddddd</div>}
              {/* <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft /> */}
            </NftContainer>
          </BottomContainer>{" "}
        </>
      )}
    </Container>
  );
}
