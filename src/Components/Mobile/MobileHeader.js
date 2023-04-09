import styled from "styled-components";
// import Logo from "../logo.png";
import NavIcon from "../../more.png";
import { useState } from "react";
import { MobileNavigation } from "./MobileNavigation";
import closeIcon from "../../close.png";

export function MobleHeader() {
  const [show, setShow] = useState(false);
  function toggleNavBar() {
    setShow((prev) => !prev);
  }
  return (
    <MobileHeaderWrapper>
      <LogoAndNameBox>
        <CompanyLogo
          src={process.env.PUBLIC_URL + "../../../assets/logo.png"}
        />
        <CompanyName>
          Company <br></br>name
        </CompanyName>
      </LogoAndNameBox>
      <Icon src={show ? closeIcon : NavIcon} onClick={toggleNavBar} />
      {show ? <MobileNavigation /> : ""}
    </MobileHeaderWrapper>
  );
}

const MobileHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10px;
  justify-content: space-around;
  gap: 80px;
`;

const LogoAndNameBox = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 10px;
  align-items: center;
`;

const CompanyName = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #2b3252;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  transition-delay: 3s;
`;

const CompanyLogo = styled.img`
  width: 26px;
  height: 26px;
`;
