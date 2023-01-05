import React from "react";
import styled from "styled-components";
import ImgCarousel from "./ImgCarousel";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useEffect } from "react";
import db from "../firebase.js";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImgCarousel />
      <Viewers />
      <Movies />
    </Container>
  );
}

// export the component to be imported in another component
export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* behind the content at all times */
    z-index: -1;
  }
`;
