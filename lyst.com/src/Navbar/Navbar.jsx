import {
  Text,
  Box,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  SimpleGrid,
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
            <Text
              mt={-2}
              display={["none", "none", "block", "block"]}
              fontSize="lg"
            >
              IN-USS
            </Text>
            <Text
              mt={-2}
              fontSize="lg"
              display={["none", "none", "block", "block"]}
            >
              Help
            </Text>
            <Button
              pt={["0px", "0px", "0px", "0px"]}
              fontSize={["12px", "12px", "16px", "16px"]}
              w={["110px", "110px", "150px", "150px"]}
              h={["25px", "25px", "35px", "35px"]}
              color="white"
              bg="black"
              _hover={{
                bg: "grey",
              }}
              onClick={() => navigate("/login")}
              className="butt1"
            >
              {isAuth ? (
                <>
                  <button style={{ marginBottom: "0px" }} onClick={logOutUser}>
                    LOGOUT
                  </button>
                </>
              ) : (
                `Sing up or Log in`
              )}
            </Button>
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
                h={[0, 0, 10, 10]}
                ml={[0, 0, 0, 0]}
                w={["0px", "80px", 160, 160]}
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
                  display={["none", "none", "block", "block"]}
                  mt={0}
                  ml={"-30px"}
                  mr={"-30px"}
                  fontSize={["0px", "0px", "lg", "lg"]}
                >
                  {elem.title}
                </Text>
              </NavLink>
            ))}
            <InputGroup
              position={["absolute", "absolute", "relative", "relative"]}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type={"search"}
                w={["85%", "85%", "100%", "100%"]}
                h={["30px", "30px", "40px", "40px"]}
                fontSize={["13px", "13px", "16px", "16px"]}
                isInvalid
                errorBorderColor="black"
                placeholder="SEARCH (EG. ACNE JEANS)"
                // onChange={(e)=> setInput(e.target.value)}
                onKeyDown={(e) => handleKye(e)}
              />
            </InputGroup>
            <Box
              mt={["-1000px", "-1000px", "0px", "0px"]}
              mr={["-0px", "0px", "-200px", "-200px"]}
              ml={["75px", "75px", "10px", "10px"]}
            >
              <Link to="/cart">
                <AiOutlineHeart className={styles.cart} />
              </Link>
            </Box>
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            <SimpleGrid
              columns={5}
              m={"auto"}
              textAlign={"center"}
              w={"100%"}
              ml={"2px"}
              h="30px"
            >
              {link.map((elem) => (
                <NavLink
                  className={({ isActive }) =>
                    !isActive ? styles.iactive : styles.idefault
                  }
                  key={elem.path}
                  to={elem.path}
                >
                  <Text mt={"2px"} w={"66px"} fontSize="16px">
                    {elem.title}
                  </Text>
                </NavLink>
              ))}
              <Text mt={"2px"} fontSize="16px">
                IN-USS
              </Text>
              <Text mt={"2px"} fontSize="16px">
                HELP
              </Text>
              <Box ml="30px">
                <Link to="/cart">
                  <AiOutlineHeart className={styles.hcart} />
                </Link>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        <Box h="40px" w={"30%"} float="right">
          {isAuth ? (
            <Text
              float={"right"}
              pr="10px"
              pl="10px"
              bg={"#dfe8f9"}
              borderRadius="10px"
            >
              <BsFillPersonFill />
              {email}
            </Text>
          ) : (
            ""
          )}
        </Box>
      </div>
    </>
  );
};

export default Navbar;
