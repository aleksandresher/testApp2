import styled from "styled-components";

export function MainSingleSlide() {
  return (
    <WrapperContainer>
      <GradientDiv></GradientDiv>
      <BackgroudDiv />
      <Image
        src={process.env.PUBLIC_URL + "../../assets/LargeImage.png"}
        //   item={item.active}
      />
      <TextWrapper>
        <ImageHeader>
          Company’s First <br></br> Service Title
        </ImageHeader>
        <ImageSubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </ImageSubText>
        <ImageButton>
          <ButtonText>See More</ButtonText>
          <LeftArrow
            src={process.env.PUBLIC_URL + "../../../assets/Vector.png"}
          />
        </ImageButton>
      </TextWrapper>
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div`
  margin-top: 50px;

  position: relative;
  display: flex;
  padding: 0 auto;

  @media (max-width: 400px) {
    margin-top: 30px;
  }
`;

const BackgroudDiv = styled.div`
  width: 1380px;
  left: 10px;
  height: 558px;
  background-color: #2b3252;
  position: absolute;
  z-index: -7;

  @media (max-width: 1440px) {
    width: 1180px;
  }
  @media (max-width: 1260px) {
    width: 980px;
  }
  @media (max-width: 1000px) {
    width: 780px;
  }
  @media (max-width: 830px) {
    width: 640px;
    height: 510px;
  }
  @media (max-width: 600px) {
    width: 480px;
  }
  @media (max-width: 440px) {
    width: 340px;
    height: 380px;
  }
  @media (max-width: 400px) {
    width: 340px;
    height: 365px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-left: 110px;
  padding: 20px;
  position: absolute;
  bottom: 60px;
  background: inherit;

  @media (max-width: 1000px) {
    margin-left: 50px;
  }
  @media (max-width: 830px) {
    width: 400px;
  }
  @media (max-width: 440px) {
    width: 300px;
    margin-left: 20px;
    gap: 10px;
  }

  @media (max-width: 400px) {
    width: 360px;
    margin-left: 10px;
  }
`;

const ImageHeader = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 58px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 1440px) {
    font-size: 46px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 830px) {
    font-size: 26px;
  }
  @media (max-width: 440px) {
    font-size: 22px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

const LeftArrow = styled.img`
  @media (max-width: 830px) {
    width: 10px;
  }
`;

const ImageSubText = styled.p`
  font-size: 16px;
  color: #fff;
  opacity: 0.7;
  line-height: 160%;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 830px) {
    font-size: 14px;
  }
  @media (max-width: 440px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    width: 300px;
  }
`;

const ButtonText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 830px) {
    font-size: 10px;
  }
`;

const ImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: inherit;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.1);
  width: 130px;
  height: 42px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 830px) {
    width: 100px;
    height: 30px;
  }
`;

const Image = styled.img`
  width: 1400px;
  height: 550px;
  background: inherit;

  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 1260px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 830px) {
    width: 660px;
    height: 500px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 440px) {
    width: 370px;
    height: 370px;
  }
  @media (max-width: 400px) {
    width: 360px;
    height: 360px;
  }
`;

const GradientDiv = styled.div`
  position: absolute;
  width: 1400px;
  height: 550px;
  background: linear-gradient(
    205.96deg,
    rgba(67, 26, 26, 0) -7.14%,
    #431a1a 121.86%
  );

  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 1260px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 830px) {
    width: 660px;
    height: 500px;
  }
  @media (max-width: 600px) {
    width: 500px;
    height: 500px;
  }
  @media (max-width: 440px) {
    width: 370px;
    height: 370px;
  }
  @media (max-width: 400px) {
    width: 360px;
    height: 360px;
  }
`;
