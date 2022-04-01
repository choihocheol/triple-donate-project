import React from "react";
import { Divider } from "@mui/material";
import { BoldText, Container, ContentContainer, ContentText, MainContainer, SubContainer, SubText, TitleContainer, TitleText } from "./AboutElements";

export default function AboutSecond() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleText>Menu</TitleText>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <SubText>・ Swap</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            triple donate 플랫폼에서 데이터 기부에 참여해 받은 TDT 토큰을 swap할 수 있습니다.
            <br />
            triple donate 플랫폼은 사용자가 데이터의 주체가 되길 바랬고, 데이터를 원하는 게시글 작성자가 양질의 데이터를 빠른 시간 내에 구할 수 있기를 바랬습니다.
            <br />
            그러나 유저가 많지 않다면 게시글 작성자는 양질의 데이터를 구하기 힘들뿐더러, 커뮤니티는 활성화되지 않을 것입니다. 그렇기에 저희는 토큰을 수익화할 수 있는 swap 기능을
            준비중입니다.
            <br />
            TDT토큰은 클레이튼 코인과 swap 가능하며 토큰의 가격은 아직 정해지지 않았습니다. 토큰의 유동성을 고려하여 데이터 기부가 활발한 활동을 할 수 있도록, 무분별한 사용이 되지
            않도록 잘 고려해서 가격을 정하겠습니다.
          </ContentText>
        </ContentContainer>
        <SubContainer>
          <SubText>・ Post</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            직접 프로젝트를 위한 게시글을 올릴 수 있으며, 다른 프로젝트에 참여해 데이터를 기부할 수 있는 메뉴입니다.
            <br />
            데이터 종류를 구별하여 다른 데이터를 구할 수도, 기부할 수도 있습니다
          </ContentText>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}
