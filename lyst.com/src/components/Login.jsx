import React from "react";
import { Box, Button, Input, SimpleGrid, Text } from "@chakra-ui/react";
import Bottom from "../Navbar/Bottom";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

const getToken = ({ email, password }) => {
  return fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

const Login = () => {
  const { loginUser, isAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.length == 0 || password.length == 0) {
      alert("Please Enter All Details.!!");
    } else {
      getToken({
        email: email,
        password: password,
      })
        .then((res) => res.json())
        .then((res) => {
          //console.log(res);
          loginUser(email, res.token);
        });
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Box mt={140} padding="6" fontSize={30} fontWeight="600">
        Log In
      </Box>
      <SimpleGrid
        textAlign={"left"}
        m="auto"
        w={["70%", "80%", "80%", "50%"]}
        mt={10}
        columns={1}
        spacing={0}
      >
        <Text
          className="The"
          textAlign={"left"}
          fontSize={["23", "27", "30", "40"]}
          fontWeight={500}
        >
          The only fashion website you'll need
        </Text>
        <Text mt={10} mb={2} fontSize={18} fontWeight={400}>
          Email
        </Text>
        <Input
          mt={1}
          type="email"
          fontSize="17"
          borderBottom={"2px solid black"}
          variant="flushed"
          placeholder="Enter your email address to login or register"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text mt={10} mb={2} fontSize={18} fontWeight={400}>
          Password
        </Text>
        <Input
          mt={1}
          type="password"
          fontSize="17"
          borderBottom={"2px solid black"}
          variant="flushed"
          placeholder="Enter your password address to login or register"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleLogin}
          colorScheme="teal"
          bg="black"
          p={6}
          mt={3}
          size="md"
          _hover={{
            bg: "grey",
          }}
        >
          Continue
        </Button>
        <Text
          mt={4}
          color="grey"
          fontWeight={600}
          fontSize={19}
          textAlign={"center"}
        >
          ---- OR ----
        </Text>
        <Button
          colorScheme="teal"
          bg="white"
          border={"1px"}
          borderRadius="4px"
          color={"black"}
          p={6}
          mt={3}
          size="md"
          _hover={{
            bg: "rgb(168, 168, 168);",
            color: "white",
          }}
        >
          <FaFacebook className="fb" />
          Continue with FaceBook
        </Button>
        <Button
          colorScheme="teal"
          bg="white"
          border={"1px"}
          borderRadius="4px"
          color={"black"}
          p={6}
          mt={3}
          size="md"
          _hover={{
            bg: "rgb(168, 168, 168);",
            color: "white",
          }}
        >
          <AiFillApple
            className="fb"
            style={{
              fontSize: "30px",
              color: "black",
            }}
          />
          Continue with Apple
        </Button>
        <Button
          colorScheme="teal"
          bg="white"
          border={"1px"}
          borderRadius="4px"
          color={"black"}
          p={6}
          mt={3}
          size="md"
          _hover={{
            bg: "rgb(168, 168, 168);",
            color: "white",
          }}
        >
          <FcGoogle
            style={{
              fontSize: "27px",
              marginLeft: "10px",
            }}
            className="fb"
          />
          Continue with FaceBook
        </Button>
        <Text mt={10} mb={150} color={"gery"}>
          By creating an account, you consent to Lyst’s{" "}
          <a
            style={{
              textDecoration: "underline",
            }}
            href=""
          >
            Terms & Conditions.
          </a>
          To learn more about how Lyst uses and protects your personal data,
          please read Lyst’s{" "}
          <a
            style={{
              textDecoration: "underline",
            }}
            href=""
          >
            Privacy Policy.
          </a>
        </Text>
      </SimpleGrid>
      <Bottom />
    </div>
  );
};

export default Login;
