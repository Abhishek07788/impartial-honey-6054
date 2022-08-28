import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../image/imgI.png"

const Bottom = () => {
  return (
    <div>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
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
        <SimpleGrid columns={[1, 1, 1, 2]} gap={20}>
          <Box bg="f5f4f2" textAlign="left" pl={50} ml={20}>
            <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
              INTERNATIONAL
            </h2>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - AU</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - CA</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - UK</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - Österreich</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - Schweiz</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - Deutschland</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - España</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - France</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - Italia</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - 日本</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - België</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst - Nederland</Text>
          </Box>
          <Box bg="f5f4f2" textAlign="left" pl={50} ml={20}>
            <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
              Help and info
            </h2>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Help center</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>About us</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Shipping policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Returns policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Payments</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Refund policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Developers</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Careers</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Contact</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Terms & conditions</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Privacy & cookie policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Intellectual property</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Categories</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Become a partner</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst Insights</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst News</Text>
          </Box>
          </SimpleGrid>
      </SimpleGrid>
    </div>
  );
};

export default Bottom;
