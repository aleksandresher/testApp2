import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
import { Slide } from "../Components/Slide";
import { MainSingleSlide } from "../Components/MainSingleSlide";
import { Services } from "../Components/Services";
import { AboutCompany } from "../Components/AboutCompany";
import styled from "styled-components";
import CustomArrows from "../Components/Slide";
import { MobileNavigation } from "../Components/MobileNavigation";
import { useState, useEffect } from "react";
import { MobleHeader } from "../Components/MobileHeader";
import { MobileSlider } from "../Components/MobileSlider";

export function HomePage() {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 541) {
      setShowMobileNavMenu(false);
    } else if (window.innerWidth < 541) {
      setShowMobileNavMenu(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 541) {
        setShowMobileNavMenu(false);
      } else if (window.innerWidth < 541) {
        setShowMobileNavMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <HomePageContainer>
      {/* {!showMobileNavMenu ? <NavBar /> : <MobileNavigation />} */}
      {showMobileNavMenu ? <MobleHeader /> : <NavBar />}
      <MainSingleSlide />
      <Services />
      {showMobileNavMenu ? <MobileSlider /> : <Slide />}
      {/* <Slide /> */}
      <AboutCompany />
      <Footer />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
