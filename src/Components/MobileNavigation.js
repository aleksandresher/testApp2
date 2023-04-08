import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CloseIcon from "../close.png";
import SIcon from "../searchIcon.png";

export function MobileNavigation() {
  return (
    <NavigationWrapper>
      <MobileNavBox>
        <MobileNav to={"/"}>Home</MobileNav>
        <MobileNav to={"/services"}>Services</MobileNav>
        <MobileNav to={"/project"}>Projects</MobileNav>
        <MobileNav to={"/about"}>About</MobileNav>
        <MobileNav to={"/contact"}>Contact</MobileNav>

        <SearchBox>
          <SearchInput type="text" placeholder="Search KeyWord ..." />
          <SearchIcon src={SIcon} />
        </SearchBox>
      </MobileNavBox>
      <Close src={CloseIcon} />
    </NavigationWrapper>
  );
}

const SearchBox = styled.div`
  position: absolute;
  top: 280px;
  display: flex;
  width: 210px;
  height: 33px;
  align-items: center;
  gap: 5px;

  background-color: inherit;
`;

const SearchInput = styled.input`
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  height: 30px;
  background-color: inherit;

  ::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #2b3252;
    padding-left: 2px;
  }
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.img``;

const NavigationWrapper = styled.div`
  display: flex;
  height: 320px;
  gap: 100px;
  position: absolute;
  background-color: #fff;
  padding: 20px 20px 20px 20px;
  top: 40px;
  left: 50px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(187, 218, 218, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const Close = styled.img`
  width: 16px;
  height: 16px;
  align-self: flex-start;
`;

const MobileNavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const MobileNav = styled(NavLink)`
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
    transform: translateX(20%);
    top: 22px;
    content: "";
    border-bottom: 1px solid #ef5555;
    width: 50%;
  }`;
