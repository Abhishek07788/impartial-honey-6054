import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../image/imgI.png"

const Bottom = () => {
  return (
    <div>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing="0px"
        bg={"#f5f4f2"}
        p={30}
        pt={"100px"}
      >
        <Box bg="#f5f4f2" p={30} pb={36} w={["100%", "100%", "100%", "100%"]}>
          <Image
            w={"100%"}
            src={img1}
            alt="img"
          />
          <Text textAlign={"left"} mt={16} ml="100px">
            Learn about the Lyst app for iPhone, iPad and Android.
          </Text>
          <Text ml="100px" textAlign={"left"}>
            © 2022 Lyst
          </Text>
        </Box>
        <Box display={"flex"}>
          <Box bg="f5f4f2" textAlign="left" pl={50} ml={20}>
            <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
              INTERNATIONAL
            </h2>
            <Text fontWeight={500}>Lyst - AU</Text>
            <Text fontWeight={500}>Lyst - CA</Text>
            <Text fontWeight={500}>Lyst - UK</Text>
            <Text fontWeight={500}>Lyst - Österreich</Text>
            <Text fontWeight={500}>Lyst - Schweiz</Text>
            <Text fontWeight={500}>Lyst - Deutschland</Text>
            <Text fontWeight={500}>Lyst - España</Text>
            <Text fontWeight={500}>Lyst - France</Text>
            <Text fontWeight={500}>Lyst - Italia</Text>
            <Text fontWeight={500}>Lyst - 日本</Text>
            <Text fontWeight={500}>Lyst - België</Text>
            <Text fontWeight={500}>Lyst - Nederland</Text>
          </Box>
          <Box bg="f5f4f2" textAlign="left" pl={50} ml={20}>
            <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
              Help and info
            </h2>
            <Text fontWeight={500}>Help center</Text>
            <Text fontWeight={500}>About us</Text>
            <Text fontWeight={500}>Shipping policy</Text>
            <Text fontWeight={500}>Returns policy</Text>
            <Text fontWeight={500}>Payments</Text>
            <Text fontWeight={500}>Refund policy</Text>
            <Text fontWeight={500}>Developers</Text>
            <Text fontWeight={500}>Careers</Text>
            <Text fontWeight={500}>Contact</Text>
            <Text fontWeight={500}>Terms & conditions</Text>
            <Text fontWeight={500}>Privacy & cookie policy</Text>
            <Text fontWeight={500}>Intellectual property</Text>
            <Text fontWeight={500}>Categories</Text>
            <Text fontWeight={500}>Become a partner</Text>
            <Text fontWeight={500}>Lyst Insights</Text>
            <Text fontWeight={500}>Lyst News</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Bottom;
