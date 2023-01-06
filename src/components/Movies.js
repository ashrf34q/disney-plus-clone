import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);

  console.log("These are my movies", movies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <img src={movie.cardImg} />
            </Wrap>
          ))}
        {/* <Wrap>
          <img src="/images/simpsons.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/simpsons.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/simpsons.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/simpsons.jpg" />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-top: 32px;

  h4 {
    margin-bottom: 24px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0 26px 30px 10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 250, 249, 0.8);
  }
`;
