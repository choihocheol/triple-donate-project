import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar, IconButton } from "@mui/material";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const MainContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  width: 100%;
  margin: 0 10px;
  padding-top: 20px;
`;
export const SubContainer = styled.div`
  width: 100%;
  margin: 30px 20px 10px 30px;
`;
export const ContentContainer = styled.div`
  width: 60%;
  margin: 10px 40px;
`;

export const TitleText = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-heght: 2rem;
`;

export const SubText = styled.p`
  font-size: 28px;
  font-weight: 600;
  line-heght: 2rem;
`;
export const ContentText = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 2.5rem;
`;

export const BoldText = styled.span`
  font-weight: 600;
`;
const ProfileContainer = styled.div`
  display: flex;
  background-image: url("https://avatars.githubusercontent.com/u/55051805?v=4");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 75px;
  height: 75px;
  margin: 40px auto;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 1.2px 1.2px 1.2px 1px #919191;
`;
const Profile = styled.div`
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
`;
const InfoContents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: row;
  width: 90%;
  height: 90px;
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
`;
const UserNameFont = styled.div`
  margin-bottom: 15px;
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
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #2c2c2c;
`;

const UserContainer = styled.div`
  font-family: "Lato", Arial, sans-serif;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 10px;
  min-width: 250px;
  max-width: 310px;
  width: 100%;
  background-color: #ffffff;
  color: #2b2b2b;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
`;

export const Us = ({ name, toDo, role, blogAddr, githubAddr }) => {
  return (
    <UserContainer>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <InfoContainer>
        <UserNameFont>{name}</UserNameFont>
        <DescFont>{role}</DescFont>
        <InfoContents style={{ borderTop: "1px solid rgba(0,0,0,0.3)" }}>
          <InfoContent>
            <TitleFont>역할</TitleFont>
            <DescFont>{toDo}</DescFont>
          </InfoContent>
        </InfoContents>
        <InfoContents>
          <IconContainer>
            <IconButton href={blogAddr} sx={{ mr: 2 }} aria-label="github">
              <Avatar sx={{ width: "22px", height: "22px" }} alt="blog" src="http://temp20.zsol.co.kr/icon_img/sns04.svg" />
            </IconButton>
            <IconButton href={githubAddr} aria-label="github">
              <GitHubIcon />
            </IconButton>
          </IconContainer>
        </InfoContents>
      </InfoContainer>
    </UserContainer>
  );
};
