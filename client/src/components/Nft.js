// import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Divider, Avatar } from "@mui/material";

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  margin-bottom: 50px;
`;

const TokenContainer = styled.div`
  width: 20rem;
  height: 31rem;
  background: #fff;
  border-radius: 15px;
  display: inline-block;
  margin: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Desc = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: 20px; */
`;

const UserText = styled.div`
  font-size: 16px;
  letter-spacing: 1px;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  margin: 0.1px;
`;
const BottonContainer = styled.div`
  height: 20%;
  margin: 0 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DescFont = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 400;
`;
const TitleFont = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export default function Nft({ title, desc, img }) {
  return (
    <div>
      <TokenContainer>
        <Image src={img} alt="logo" />
        <Divider />
        <BottonContainer>
          <Desc>
            <User>
              <UserText>
                <TitleFont>{title}</TitleFont>
                <DescFont>{desc}</DescFont>
              </UserText>
            </User>
          </Desc>
          <Avatar sx={{ width: "30px", height: "30px" }} alt="trophy" src="http://temp20.zsol.co.kr/icon_img/trophy.svg" />
        </BottonContainer>
      </TokenContainer>
    </div>
  );
}
