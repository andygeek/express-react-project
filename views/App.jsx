import React from "react";
import { HomePage } from "./pages/HomePage";

export default function Index(props) {
  return (
    <>
      <HomePage name={props.name}/>
    </>
  );
}
