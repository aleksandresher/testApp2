import styled from "styled-components";

export function AboutCompany() {
  return (
    <AboutCompanyWrapper>
      <ImageWrapper>
        <CyborgImage src={process.env.PUBLIC_URL + "../../assets/cyborg.png"} />
        <BackgroundDiv />
      </ImageWrapper>

      <CompanyInfo>
        <AboutCompanyHeader>About Company</AboutCompanyHeader>
        <CompanyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CompanyText>
        <ImageButton>
          <ButtonText>See More</ButtonText>
          <LeftArrow
            src={process.env.PUBLIC_URL + "../../assets/redArrow.png"}
          />
        </ImageButton>
      </CompanyInfo>
    </AboutCompanyWrapper>
  );
}

const AboutCompanyWrapper = styled.div`
  display: flex;
  gap: 70px;
  width: 1300px;
  height: 650px;
  margin-top: 60px;
  margin-bottom: 30px;

  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 1260px) {
    width: 900px;
    gap: 50px;
    height: 500px;
  }
  @media (max-width: 1000px) {
    width: 700px;
  }
  @media (max-width: 830px) {
    width: 600px;
    gap: 40px;
    height: 400px;
  }
  @media (max-width: 600px) {
    gap: 20px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    width: 400px;
    align-items: center;
    margin-bottom: 380px;
  }
`;

const AboutCompanyHeader = styled.h1`
  font-size: 40px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;

  @media (max-width: 1260px) {
    font-size: 32px;
    margin-top: 0px;
  }
  @media (max-width: 1000px) {
    font-size: 28px;
  }
  @media (max-width: 830px) {
    font-size: 24px;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  gap: 20px;

  @media (max-width: 1260px) {
    width: 500px;
    gap: 0px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

const CompanyText = styled.p`
  font-size: 20px;
  color: #2b3252;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  line-height: 160%;

  @media (max-width: 1260px) {
    width: 500px;
    margin: 0;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    width: 300px;
  }
  @media (max-width: 830px) {
    font-size: 12px;
    width: 280px;
  }
`;

const CyborgImage = styled.img`
  width: 500px;
  height: 540px;

  @media (max-width: 1260px) {
    width: 400px;
    height: 440px;
  }
  @media (max-width: 830px) {
    width: 320px;
    height: 360px;
  }
  @media (max-width: 600px) {
    width: 280px;
    height: 300px;
  }
  @media (max-width: 400px) {
    width: 340px;
  }
`;

const BackgroundDiv = styled.div`
  width: 480px;
  height: 548px;
  border: 1px solid #000;
  position: absolute;
  left: 10px;

  z-index: -5;

  @media (max-width: 1260px) {
    width: 380px;
    height: 440px;
    top: 10px;
  }
  @media (max-width: 830px) {
    width: 295px;
    height: 360px;
  }
  @media (max-width: 600px) {
    width: 260px;
    height: 300px;
  }
  @media (max-width: 400px) {
    width: 320px;
    height: 300px;
    left: 25px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 375px;
    justify-content: center;
  }
`;

const ButtonText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #ef5555;
`;

const ImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: inherit;
  border: 1px solid #ef5555;
  background-color: rgba(255, 255, 255, 0.1);
  width: 130px;
  height: 42px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const LeftArrow = styled.img``;
