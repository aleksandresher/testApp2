import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
          <SearchIcon
            src={process.env.PUBLIC_URL + "../../../assets/searchIcon.png"}
          />
        </SearchBox>
      </MobileNavBox>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.div`
  display: flex;
  height: 320px;
  width: 300px;
  gap: 100px;
  position: absolute;
  background-color: #fff;
  padding: 20px 20px 20px 20px;
  top: 80px;
  left: 20px;
  border-radius: 8px;
  background-color: #e9e9e9;
`;

const MobileNavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

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
  height: 40px;
  margin-bottom: 5px;
  background-color: inherit;

  ::placeholder {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #2b3252;
    padding-left: 4px;
  }
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.img``;

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
