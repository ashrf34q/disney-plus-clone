import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <LogoOne src="/images/cta-logo-one.svg" />
        <Signup>GET ALL THREE</Signup>
        <Description>
          Get your favorite stories, originals and live sports with Disney+,
          Hulu, and ESPN+
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 100px;
`;

const LogoOne = styled.img``;

const Signup = styled.a`
  width: 100%;
  letter-spacing: 2px;
  background-color: #228be6;
  font-weight: bold;
  padding: 16px 0;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 250ms;
  margin-bottom: 12px;

  &:hover {
    background-color: #1971c2;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 12px;
`;

const LogoTwo = styled.img``;
