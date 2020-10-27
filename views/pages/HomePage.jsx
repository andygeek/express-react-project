import React from "react";
import { Footer } from "../components/Footer";

export const HomePage = ({ name }) => {
  return (
    <>
      <link rel="stylesheet" href="/public/styles/HomePage.css" />
      <h1 className="home__title">Home Page</h1>
      <h3>Hello {name}</h3>
      <Footer />
    </>
  );
};
