import styled from "styled-components";
import data from "../slideData.json";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export function MobileSlider() {
  return (
    <Splide
      options={{
        perPage: 1,
        width: "300px",
        arrows: false,
      }}
    >
      {data?.map((item) => (
        <SplideSlide key={item.id}>
          <GradientDiv></GradientDiv>

          <TestImages src={process.env.PUBLIC_URL + item?.image} />
          <SlideTextWrapper>
            <SlideText>{item?.text}</SlideText>
            <SlideDate>{item?.date}</SlideDate>
            <SlideButton>
              <ButtonText>See more</ButtonText>
              <BtnArrow
                src={process.env.PUBLIC_URL + "../../assets/Vector.png"}
              />
            </SlideButton>
          </SlideTextWrapper>
        </SplideSlide>
      ))}
    </Splide>
  );
}

const SlideTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  position: absolute;
  bottom: 30px;
  background: inherit;
`;

const SlideText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  width: 200px;
  font-weight: 700;
  color: #fff;
`;

const SlideDate = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  opacity: 0.8;
`;

const GradientDiv = styled.div`
  position: absolute;
  width: 320px;
  height: 400px;
  background: linear-gradient(
    205.96deg,
    rgba(67, 26, 26, 0) -7.14%,
    #431a1a 121.86%
  );
`;

const SlideButton = styled.button`
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
`;

const ButtonText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;
const BtnArrow = styled.img``;

const TestImages = styled.img`
  height: 400px;
`;
