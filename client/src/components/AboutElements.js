import styled from "styled-components";
import LogoSrc from "../assets/logo_black.png";
export const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;

  position: relative;
  z-index: 1;

  justify-content: center;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background: url(${LogoSrc});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const MainContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  width: 100%;
  margin: 5px 10px;
  padding: 10px 0;
`;
export const SubContainer = styled.div`
  width: 100%;
  margin: 20px 20px;
`;
export const ContentContainer = styled.div`
  width: 100%;
  margin: 10px 40px;
`;
