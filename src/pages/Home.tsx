/* eslint-disable react/function-component-definition */
import React from 'react';
import Header from "../components/Header";
import StoriesContainer from "../components/StoriesContainer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StoriesContainer />
    </>
  )
}

export default Home;
