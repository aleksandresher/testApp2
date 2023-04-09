import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <NavContainer>
      <LogoAndNameBox>
        <CompanyLogo
          src={process.env.PUBLIC_URL + "../../../assets/logo.png"}
        />
        <CompanyName>
          Company <br></br>name
        </CompanyName>
      </LogoAndNameBox>

      <NavBox>
        <Nav to={"/"}>Home</Nav>
        <Nav to={"/services"}>Services</Nav>
        <Nav to={"/project"}>Projects</Nav>
        <Nav to={"/about"}>About</Nav>
        <Nav to={"/contact"}>Contact</Nav>
      </NavBox>

      <SearchBox>
        <SearchInput type="text" placeholder="Search KeyWord ..." />
        <SearchIcon
          src={process.env.PUBLIC_URL + "../../../assets/searchIcon.png"}
        />
      </SearchBox>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1220px;
  height: 68px;
  margin-top: 20px;

  @media (max-width: 1440px) {
    width: 1000px;
  }
  @media (max-width: 1260px) {
    width: 800px;
  }
  @media (max-width: 1000px) {
    width: 600px;
    gap: 15px;
  }
  @media (max-width: 830px) {
    width: 500px;
    height: 50px;
  }
  @media (max-width: 440px) {
    width: 300px;
  }
`;

const CompanyLogo = styled.img`
  width: 61px;
  height: 68px;

  @media (max-width: 1440px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 1260px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 830px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 440px) {
    width: 20px;
    height: 20px;
  }
`;

const CompanyName = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #2b3252;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1260px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 830px) {
    font-size: 12px;
  }
  @media (max-width: 440px) {
    font-size: 12px;
  }
`;

const NavBox = styled.div`
  display: flex;
  width: 548px;
  gap: 50px;

  @media (max-width: 1440px) {
    width: 500px;
    gap: 40px;
  }
  @media (max-width: 1260px) {
    width: 400px;
    gap: 25px;
  }
  @media (max-width: 1000px) {
    width: 360px;
    gap: 20px;
  }
  @media (max-width: 830px) {
    width: 300px;
    gap: 15px;
  }
  @media (max-width: 440px) {
    width: 400px;
  }
`;

const Nav = styled(NavLink)`
  font-size: 18px;
  height: 23px;
  color: #2b3252;
  text-decoration: none;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  position: relative;

  &:hover{
    color: #ef5555;
  }
  &.active{
    color:#ef5555;
  }
 
  }
  &.active:before {
    color: #ef5555;
    position: absolute;
    transform: translateX(50%);
    top: 22px;
    content: "";
    border-bottom: 1px solid #ef5555;
    width: 50%;
  }
  @media (max-width: 1260px) {
   font-size: 14px;
  }
  @media (max-width: 1000px) {
    font-size:12px;
  }
  @media (max-width: 830px) {
    font-size:10px;
  }
`;

const LogoAndNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 210px;
  height: 33px;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid #f1f1f1;

  @media (max-width: 1260px) {
    width: 170px;
  }
  @media (max-width: 1000px) {
    width: 140px;
    margin-bottom: 10px;
  }
  @media (max-width: 830px) {
    width: 120px;
    height: 25px;
    padding-bottom: 10px;
  }
  @media (max-width: 440px) {
    width: 100px;
    display: none;
  }
`;

const SearchInput = styled.input`
  border: 1px solid #fff;
  height: 30px;
  padding-left: 5px;

  ::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #2b3252;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 830px) {
    width: 120px;
    height: 25px;
    margin: 0px;

    ::placeholder {
      font-size: 12px;
    }
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;

  @media (max-width: 1000px) {
    width: 12px;
    height: 12px;
  }
`;
