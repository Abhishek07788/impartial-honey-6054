import {
  Text,
  Box,
  Button,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { useState } from "react";
import { Getdata } from "../components/SearchData";


export function Inputdata(input) {
  Getdata(input);
}

const Navbar = () => {
  function handleKye(e) {
    if (e.key === "Enter") {
      Inputdata(e.target.value)
    }
  }


  const link = [
    {
      path: "/mens",
      title: "MEN",
    },
    {
      path: "/women",
      title: "WOMEN",
    },
  ];

  return (
    <div className="navbar">
      <Box
        alignItems="top"
        bg="white"
        w="100%"
        p={6}
        color="black"
        pb={0}
        borderTop={"1px solid black"}
        bor
      >
        <Box display="flex" float="right" padding={0} gap="10px">
          <Text mt={-2} fontSize="lg">
            IN-USS
          </Text>
          <Text mt={-2} fontSize="lg">
            Help
          </Text>
          <button className="butt1">Sing up or Log in</button>
        </Box>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={6}
        color="black"
        pb={0}
        borderBottom={"1px solid black"}
        bor
      >
        <Box display="flex" gap={30} alignItems="center">
          <Link to="/">
            <Image
              h={[5,8,10,10]}
              ml={[1,1,3,3]}
              w={["60px","80px",180,180]}
              src="https://i.postimg.cc/TPBz6N0w/Screenshot-2022-08-24-164137.png"
              alt="Dan Abramov"
            />
          </Link>
          {link.map((elem) => (
            <NavLink
              className={({ isActive }) =>
                !isActive ? styles.active : styles.default
              }
              key={elem.path}
              to={elem.path}
            >
              <Text mt={0} ml={[-30,-4,null,null]}
              mr={[-35,-10,null,null]}
              fontSize={["14px","lg","lg","lg"]}
              >
                {elem.title}
              </Text>
            </NavLink>
          ))}
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
             w={[140,200,"100%","100%"]}
              isInvalid
              errorBorderColor="black"
              placeholder="SEARCH (EG. ACNE JEANS)"
              // onChange={(e)=> Inputdata(e.target.value)}
              onKeyDown={(e) => handleKye(e)}
            />
          </InputGroup>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
