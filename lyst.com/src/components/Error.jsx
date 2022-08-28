import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Error = () => {
  return (
    <>
      <Heading mt={200}>Sorry, This page does not exist...</Heading>
      <img
        style={{width: "600px",margin:"auto",  marginTop: "60px" }}
        src="https://thumbs.gfycat.com/AnotherAmazingBirdofparadise-max-1mb.gif"
        alt="Loading..."
      />
      <br />
      <br />
      <Link to="/">
        <Button colorScheme="teal" size="lg">
          Go Back 
        </Button>
      </Link>
    </>
  );
};

export default Error;
