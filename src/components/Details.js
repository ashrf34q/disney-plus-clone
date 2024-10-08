import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <MovieTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </MovieTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <img src="/images/watchlist-icon.svg" />
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <SubTitle>2018 ◦ 7m ◦ Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        An ageing Chinese mother, feeling alone when her child moves out, gets a
        second chance at motherhood when one of her dumplings comes to life. But
        she finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieTitle = styled.div`
  height: 30vh;
  width: 35vw;
  margin-top: 48px;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 14px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  border: none;
  background: rgb(249, 249, 249);
  height: 56px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 24px;
  }
`;

const GroupButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
  img {
    width: 30px;
  }
`;

const SubTitle = styled.div`
  color: rgb(349, 249, 249);
  font-size: 16px;
  min-height: 20px;
  margin-top: 24px;
`;

const Description = styled.div`
  max-width: 750px;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`;
