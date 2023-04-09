import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <FooterWraaper>
      <FooterContainer>
        <TestContainer>
          <FirstDiv>
            <LogoAndName>
              <Logo
                src={process.env.PUBLIC_URL + "../../../assets/logoWhite.png"}
              />
              <CompanyName>
                Company <br></br>Name
              </CompanyName>
            </LogoAndName>
            <AllRight>2023 All Rights Reserved</AllRight>
          </FirstDiv>
          <NavAndSocial>
            <FooterNavs>
              <Nav to={"/"}>Home</Nav>
              <Nav to={"/services"}>Services</Nav>
              <Nav to={"/project"}>Projects</Nav>
              <Nav to={"/about"}>About</Nav>
              <Nav to={"/contact"}>Contact</Nav>
            </FooterNavs>
            <SocIconWrapper>
              <SocIconContainer>
                <img
                  src={process.env.PUBLIC_URL + "../../../assets/insta.png"}
                />
              </SocIconContainer>
              <SocIconContainer>
                <img
                  src={process.env.PUBLIC_URL + "../../../assets/facebook.png"}
                />
              </SocIconContainer>
            </SocIconWrapper>
          </NavAndSocial>
        </TestContainer>

        <InputContainer>
          <NameEmailWrapper>
            <NameInput type="text" placeholder="Name"></NameInput>
            <EmailInput type="email" placeholder="Email"></EmailInput>
          </NameEmailWrapper>

          <TextInput type="text" placeholder="Text"></TextInput>
          <SendButton>Send</SendButton>
        </InputContainer>
      </FooterContainer>
    </FooterWraaper>
  );
}

const FooterWraaper = styled.div`
  display: flex;
  width: 100%;

  background-color: #2b3252;
  justify-content: center;
  padding: 30px 0px 30px 0px;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1300px;
  justify-content: space-between;

  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 1260px) {
    width: 880px;
    gap: 20px;
  }
  @media (max-width: 1000px) {
    width: 660px;
  }
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

const TestContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1260px) {
    gap: 10px;
  }
  @media (max-width: 830px) {
    gap: 60px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 20px;
  }
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 207px;
  gap: 20px;

  @media (max-width: 1000px) {
    width: 170px;
  }
`;

const NavAndSocial = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;
  @media (max-width: 400px) {
    gap: 10px;
  }
`;

const AllRight = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.7;

  @media (max-width: 1260px) {
    font-size: 12px;
  }
`;

const SocIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 2px solid #fff;
  border-radius: 8px;
`;
const SocIconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CompanyName = styled.p`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin: 0px;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1260px) {
    font-size: 16px;
  }
`;

const LogoAndName = styled.div`
  display: flex;

  gap: 20px;
`;

const Logo = styled.img`
  @media (max-width: 1440px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 1260px) {
    width: 40px;
    height: 40px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1000px) {
    margin: 0px;
  }
  @media (max-width: 830px) {
    align-self: flex-start;
    margin-left: 60px;
  }
  @media (max-width: 400px) {
    margin-left: 45px;
  }
`;

const NameEmailWrapper = styled.div`
  display: flex;
  gap: 20px;
  background: inherit;
`;

const NameInput = styled.input`
  width: 230px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: inherit;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.7;
  padding-left: 10px;

  ::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 1260px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    width: 100px;
    height: 30px;

    ::placeholder {
      font-size: 12px;
    }
  }
  @media (max-width: 830px) {
    width: 150px;
  }
  @media (max-width: 440px) {
    width: 110px;
  }
  @media (max-width: 400px) {
    width: 100px;
  }
`;

const EmailInput = styled.input`
  width: 230px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: inherit;
  padding-left: 10px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.7;

  ::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1260px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
    ::placeholder {
      font-size: 12px;
    }
  }
  @media (max-width: 830px) {
    width: 150px;
  }
  @media (max-width: 440px) {
    width: 110px;
  }
  @media (max-width: 400px) {
    width: 100px;
  }
`;

const TextInput = styled.textarea`
  width: 490px;
  height: 120px;
  border-radius: 8px;
  background: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  opacity: 0.7;
  position: relative;

  ::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1260px) {
    width: 340px;
    height: 80px;
  }
  @media (max-width: 1000px) {
    width: 230px;
    height: 60px;
    ::placeholder {
      font-size: 12px;
    }
  }
  @media (max-width: 830px) {
    width: 330px;
  }
  @media (max-width: 440px) {
    width: 240px;
  }
  @media (max-width: 400px) {
    width: 235px;
  }
`;
const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 74px;
  height: 42px;
  background-color: #ef5555;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 150px;
  left: 400px;

  @media (max-width: 1260px) {
    left: 280px;
    top: 120px;
    width: 60px;
    height: 30px;
  }
  @media (max-width: 1000px) {
    left: 180px;
    top: 95px;
    width: 50px;
    height: 25px;
    font-size: 12px;
  }
  @media (max-width: 830px) {
    left: 280px;
  }
  @media (max-width: 440px) {
    left: 170px;
    top: 80px;
    font-size: 10px;
  }
  @media (max-width: 400px) {
    left: 180px;
    height: 20px;
    font-size: 10px;
    top: 80px;
  }
`;

const FooterNavs = styled.div`
  display: flex;
  width: 440px;
  justify-content: space-between;

  @media (max-width: 1260px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

const Nav = styled(NavLink)`
  font-size: 16px;
  height: 23px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;

  &:hover{
    color: #ef5555;
  }
  &.active{
    color:#ef5555;
  }
 
  }
  &.active:before {
    color: #ef5555;
    
    top: 22px;
    content: "";
    border-bottom: 1px solid #ef5555;
    width: 50%;
  }
  @media (max-width:1260px) {
    font-size:12px;
  }
  
`;
