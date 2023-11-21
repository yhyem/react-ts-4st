import { Link } from "react-router-dom";
import Lion from "../assets/Lion.svg";
import { styled } from "styled-components";
import Tab from "./Tab";

export const Header = () => {
  return (
    <HeaderWrapper>
      <ContenetWrapper>
        <Link to="/">
          <img src={Lion} alt="logo_lion" />
        </Link>
        <ButtonWrapper>
          <Tab link="/log-in" text="로그인" />
          <Tab link="/sign-up" text="회원가입" />
        </ButtonWrapper>
      </ContenetWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  height: 70px;
  min-width: 320px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContenetWrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  align-items: center;
`;
