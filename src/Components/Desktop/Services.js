import styled from "styled-components";

export function Services() {
  return (
    <ServicesWrapper>
      <ServicesHeader>Services</ServicesHeader>
      <WrapperContainer>
        <ServiceSubContainer>
          <ImageWrapper>
            <ServicesImage
              src={process.env.PUBLIC_URL + "../../assets/moneys.png"}
            />
          </ImageWrapper>
          <LogoText>Service Name</LogoText>
        </ServiceSubContainer>

        <ServiceSubContainer>
          <ImageWrapper>
            <ServicesImage
              src={process.env.PUBLIC_URL + "../../assets/wallet-minus.png"}
            />
          </ImageWrapper>
          <LogoText>Service Name</LogoText>
        </ServiceSubContainer>
        <ServiceSubContainer>
          <ImageWrapper>
            <ServicesImage
              src={process.env.PUBLIC_URL + "../../assets/audio-square.png"}
            />
          </ImageWrapper>
          <LogoText>Service Name</LogoText>
        </ServiceSubContainer>
      </WrapperContainer>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  @media (max-width: 440px) {
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
`;
const WrapperContainer = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 1440px) {
    width: 1000px;
  }
  @media (max-width: 1260px) {
    width: 800px;
  }
  @media (max-width: 1000px) {
    width: 700px;
  }
  @media (max-width: 830px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ServiceSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: #f8f8fa;
  border-radius: 50%;
  margin-bottom: 50px;
  box-shadow: 0px 15px #f0f1f1;

  @media (max-width: 830px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 400px) {
  }
`;

const ServicesHeader = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  align-self: center;

  @media (max-width: 1440px) {
    font-size: 30px;
  }
  @media (max-width: 1260px) {
    font-size: 26px;
  }
  @media (max-width: 830px) {
    font-size: 22px;
  }
`;
const ServicesImage = styled.img`
  widht: 60px;
  height: 60px;

  @media (max-width: 830px) {
    width: 40px;
    height: 40px;
  }
`;

const LogoText = styled.p`
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;

  @media (max-width: 1440px) {
    font-size: 24px;
  }
  @media (max-width: 1260px) {
    font-size: 20px;
  }
  @media (max-width: 830px) {
    font-size: 18px;
  }
`;
