import styled from "styled-components";
import { useState, useEffect } from "react";
import { Footer } from "../Components/Desktop/Footer";
import { NavBar } from "../Components/Desktop/NavBar";
import { Slide } from "../Components/Desktop/Slide";
import { MainSingleSlide } from "../Components/Desktop/MainSingleSlide";
import { Services } from "../Components/Desktop/Services";
import { AboutCompany } from "../Components/Desktop/AboutCompany";
import { MobleHeader } from "../Components/Mobile/MobileHeader";
import { MobileSlider } from "../Components/Mobile/MobileSlider";

export function HomePage() {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

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
      {showMobileNavMenu ? <MobleHeader /> : <NavBar />}
      <MainSingleSlide />
      <Services />
      {showMobileNavMenu ? <MobileSlider /> : <Slide />}
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
