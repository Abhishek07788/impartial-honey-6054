import {
  Text,
  Box,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AppContext = createContext();
const Navbar = ({ children }) => {
  const { isAuth, logOutUser, email } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleKye(e) {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      navigate("/search");
    }
  }

  // useEffect(()=>(
  //   localStorage.setItem("input",(search))
  // ),[search])

  const link = [
    {
      path: "/women",
      title: "WOMEN",
    },
    {
      path: "/mens",
      title: "MEN",
    },
  ];

  return (
    <>
      <AppContext.Provider value={search}>{children}</AppContext.Provider>
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
          <Link to="/">
            <Image
              h={[4, 8, 10, 10]}
              ml={[0, 0, 3, 3]}
              w={["60px", "80px", 180, 180]}
              position="absolute"
              display={["block", "block", "none", "none"]}
              src="https://i.postimg.cc/TPBz6N0w/Screenshot-2022-08-24-164137.png"
              alt="Dan Abramov"
            />
          </Link>
          <Box display="flex" float="right" padding={0} gap="10px">
            <Text mt={-2} fontSize="lg">
              IN-USS
            </Text>
            <Text mt={-2} fontSize="lg">
              Help
            </Text>
            {isAuth ? (
              <Text>
                <BsFillPersonFill />
                {email}
              </Text>
            ) : (
              ""
            )}
            <button onClick={() => navigate("/login")} className="butt1">
              {isAuth ? (
                <>
                  <button style={{ marginBottom: "0px" }} onClick={logOutUser}>
                    LOGOUT
                  </button>
                </>
              ) : (
                `Sing up or Log in`
              )}
            </button>
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
                h={[4, 8, 10, 10]}
                ml={[0, 0, 0, 0]}
                w={["60px", "80px", 160, 160]}
                display={["none", "none", "block", "block"]}
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
                <Text
                  mt={0}
                  ml={[-30, -10, null, null]}
                  mr={[-35, -10, null, null]}
                  fontSize={["14px", "lg", "lg", "lg"]}
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
                type={"search"}
                w={[140, 300, "100%", "100%"]}
                isInvalid
                errorBorderColor="black"
                placeholder="SEARCH (EG. ACNE JEANS)"
                // onChange={(e)=> setInput(e.target.value)}
                onKeyDown={(e) => handleKye(e)}
              />
            </InputGroup>
            <Link to="/cart">
              <AiOutlineHeart className={styles.cart} />
            </Link>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Navbar;
