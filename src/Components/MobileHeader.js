import styled from "styled-components";
import Logo from "../logo.png";
import NavIcon from "../more.png";
import { useState } from "react";
import { MobileNavigation } from "./MobileNavigation";

export function MobleHeader() {
  const [show, setShow] = useState(false);
  function toggleNavBar() {
    setShow((prev) => !prev);
  }
  return (
    <MobileHeaderWrapper>
      <LogoAndNameBox>
        <CompanyLogo src={Logo} />
        <CompanyName>
          Company <br></br>name
        </CompanyName>
      </LogoAndNameBox>
      <Icon src={NavIcon} onClick={toggleNavBar} />
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
`;

const CompanyName = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #2b3252;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const CompanyLogo = styled.img``;
