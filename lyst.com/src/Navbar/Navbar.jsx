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

const Navbar = () => {
  return (
    <div>
      <Box
        alignItems="top"
        bg="white"
        w="100%"
        p={6}
        color="black"
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
        borderBottom={"1px solid black"}
        bor
      >
        <Box display="flex" gap={30} alignItems="center">
          <img
            style={{ width: "90px", height: "40px" }}
            src="https://i.postimg.cc/TPBz6N0w/Screenshot-2022-08-24-164137.png"
            alt="Dan Abramov"
          />
          <Text mt={0} fontSize="lg">
            Men
          </Text>
          <Text mt={0} fontSize="lg">
            Women
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              isInvalid
              errorBorderColor="black"
              placeholder="SEARCH (EG. ACNE JEANS)"
            />
          </InputGroup>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
