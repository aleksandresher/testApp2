import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import data from "../../slideData.json";

export function Slide() {
  const [items, setItems] = useState(data);
  const [go, setGo] = useState(0);
  const [rightArrowactive, setRightArrowActive] = useState(false);
  const [leftArrowactive, setLeftArrowActive] = useState(true);
  const [LeftarrowFill, setLeftArrowFill] = useState("");
  const [RightarrowFill, setRightArrowFill] = useState("");

  useEffect(() => {
    if (go === -321) {
      setLeftArrowActive(false);
      setRightArrowFill("#f1f1f1");
      setLeftArrowFill("#2B3235");
      setRightArrowActive(true);
    } else if (go === 0) {
      setRightArrowActive(false);
      setLeftArrowActive(true);
      setLeftArrowFill("#f1f1f1");
      setRightArrowFill("#2B3235");
    } else if (go < 0) {
      setRightArrowActive(true);
      setLeftArrowActive(true);
    }
  }, [go]);

  function left() {
    if (leftArrowactive) {
      setGo((prev) => prev - 107);
    }
  }
  function right() {
    if (rightArrowactive) {
      setGo((prev) => prev + 107);
    }
  }
  return (
    <TestSlideContainer>
      <NewsContainer>
        <NewsHeader>News</NewsHeader>
        <ArrowContainer>
          <LeftArrow
            onClick={right}
            color={LeftarrowFill}
            width="33"
            height="16"
            viewBox="0 0 33 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM33 7L1 7L1 9L33 9L33 7Z" />
          </LeftArrow>
          <RightArrow
            onClick={left}
            color={RightarrowFill}
            width="33"
            height="16"
            viewBox="0 0 33 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" />
          </RightArrow>
        </ArrowContainer>
      </NewsContainer>
      {/* <ImageContainer> */}
      <Container>
        {items?.map((item) => (
          <SlideContainer key={item.id} go={go}>
            <GradientDiv></GradientDiv>
            <GradientDiv2 num={item.id}></GradientDiv2>
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
          </SlideContainer>
        ))}
      </Container>
    </TestSlideContainer>
  );
}
const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 1300px;
  height: 410px;
  overflow-y: hidden;
  overflow-x: hidden;
  gap: 20px;

  @media (max-width: 600px) {
    width: 700px;
    padding-left: 20px;
  }
  @media (max-width: 440px) {
    width: 360px;
  }
`;

const NewsHeader = styled.h1`
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #000;

  @media (max-width: 1260px) {
    font-size: 28px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  transform: translateX(${(props) => props.go}%);
  width: 320px;
  position: relative;
`;
const TestSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 1300px;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 1260px) {
    width: 900px;
  }
  @media (max-width: 1000px) {
    width: 720px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 830px) {
    width: 580px;
  }
  @media (max-width: 440px) {
    width: 360px;
  }
`;

const TestImages = styled.img`
  width: 320px;
  height: 400px;
  transform: translateX(${(props) => props.go}%);
`;

const LeftArrow = styled.svg`
  cursor: pointer;
  fill: ${(props) => (props.color ? props.color : "")};
`;
const RightArrow = styled.svg`
  cursor: pointer;
  fill: ${(props) => (props.color ? props.color : "")};
`;
const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 20px;
`;
const ArrowContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const SlideTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  position: absolute;
  bottom: 10px;
  background: inherit;
`;

const SlideText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
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
const GradientDiv2 = styled.div`
  position: absolute;
  width: 300px;
  left: 10px;
  height: 410px;
  background-color: ${(props) => (props.num === 0 ? "#Ef5555" : " #fff")};
  z-index: -200;
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
