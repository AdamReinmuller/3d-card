import React, { FC, useRef, useCallback, MouseEvent } from "react";
import Head from "next/head";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { GlobalStyle } from "../components/GlobalStyle";

const Index: FC = () => {
  const sizes = [
    { size: 39, active: false },
    { size: 40, active: true },
    { size: 41, active: false },
    { size: 42, active: false },
    { size: 43, active: false },
  ];
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const sneakerImageRef = useRef<HTMLImageElement>(null);
  const sizesRef = useRef<HTMLDivElement>(null);
  const CTARef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const handleRotate = useCallback((e: MouseEvent) => {
    console.log(cardRef.current?.getBoundingClientRect);
    console.log(e.screenX);
    console.log(e.pageX);
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>3d Card Effect</title>
      </Head>

      <AnimationContainer>
        <Card ref={cardRef} style={{ rotateX, rotateY, position: "relative" }} onMouseMove={handleRotate}>
          <Sneaker>
            <Circle />
            <SneakerImage src="/adidas.png" ref={sneakerImageRef} />
          </Sneaker>
          <Info>
            <Title ref={titleRef}>Adidas ZX</Title>
            <Description ref={descriptionRef}>
              future-ready trainers with wrapped boost for exceptional comfort
            </Description>
            <Sizes ref={sizesRef}>
              {sizes.map(({ active, size }) => (
                <Size key={size} active={active}>
                  {size}
                </Size>
              ))}
            </Sizes>
            <CTA ref={CTARef}>Purchase</CTA>
          </Info>
        </Card>
      </AnimationContainer>
    </Container>
  );
};

export default Index;

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationContainer = styled(motion.div)`
  perspective: 1000px;
  align-items: center;
  padding: 0 10rem;
`;

const Card = styled(motion.div)`
  perspective: 1000px;
  padding: 4rem 3rem;
  transform-style: preserve-3d;
  border-radius: 30px;
  width: 23rem;
  box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);
`;

const Sneaker = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 9rem;
  width: 9rem;
  background: linear-gradient(90deg, rgba(246, 81, 71, 0.75) 0%, rgba(15, 88, 167, 0.75) 100%);
  border-radius: 50%;
  z-index: -1;
`;

const SneakerImage = styled.img`
  width: 80%;
  transition: transform 0.7s ease-out;
`;

const Info = styled.div`
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.3rem;
  margin-bottom: 1rem;
  transition: transform 0.7s ease-out;
`;

const Description = styled.h3`
  color: #363636;
  font-weight: 300;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: transform 0.7s ease-out;
`;

const Sizes = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.7s ease-out;
`;

const Size = styled.button<{ active?: boolean }>`
  padding: 0.2rem 1rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border: none;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.2), -4px -2px 6px rgba(162, 162, 162, 0.3);
  background-color: ${({ active }) => (active ? "#525252" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
`;

const CTA = styled.button`
  padding: 0.7rem 0;
  width: 100%;
  border-radius: 30px;
  background-color: #f65147;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 3rem 0 0;
  cursor: pointer;
  transition: transform 0.7s ease-out;
`;
