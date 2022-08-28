import {
  Box,
  Button,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SiFlipkart } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import Bottom from "../Navbar/Bottom";
import { useNavigate } from "react-router-dom";


const Details = () => {
  const navigate = useNavigate()

  let data=JSON.parse(localStorage.getItem("details"))
  console.log('data: ', data);
    
  return (
    <div>
      <Box mt={140} w="100%" p={4} color="white">
        <Heading color={"black"}>PRODUCT DETAILS</Heading>
      </Box>
      <SimpleGrid
       // border={"1px solid black"}
        m="auto"
        w="80%"
        textAlign={"left"}
        justifyContent="space-around"
        mb={100}
        columns={[1,1,1,2]}
        gap={10}
      >
        <Box>
          <Image
            margin={"auto"}
            height={"500px"}
            borderRadius={5}
            src={data.image}
            alt="Image"
          />
        </Box>
        <Box>
          <Text fontSize={"18px"} mt="4">
            New Season
          </Text>
          <Text fontSize={"26px"} fontWeight="700">
            LYST
          </Text>
          <Text>{data.title}</Text>
          <Text mt={10} fontSize="23px" fontWeight={500}>
           Rs. {data.price}
          </Text>
          <Text mb={7}>Import duties included</Text>
          <Box display={"flex"} alignItems="center" gap={1}>
            <SiFlipkart />
            <a className="detailsAtag" href="">
              {" "}
              Find your size
            </a>
          </Box>
          <Select border={"2px solid  black"} mt="6" placeholder="S">
            <option value="option1">S</option>
            <option value="option3">M</option>
            <option value="option2">SX</option>
            <option value="option2">XL</option>
          </Select>
          <Box 
          pr={5}
          w={["100%","100%","105%","110%"]}
          display={"flex"} alignItems="center" justifyContent={"space-between"}>
            <Button
              mt={3}
              colorScheme={"blue"}
              w={[100, 150, 300]}
              bg="black"
              fontSize={17}
              color="white"
              size="md"
              onClick={()=> navigate("/payment")}
            >
              Go To Checkout
            </Button>
            <AiOutlineHeart
            fontSize={35}
            style={{
                marginTop:"14",
                border:"1px solid",
                padding:"5",
                marginRight:"44",
                borderRadius:"5px",
                color:"red"
            }}
            />
          </Box>
          <Text mt={6}>ESTIMATED DELIVERY</Text>
          <Text>Sep 1 - Sep 9</Text>
        </Box>
      </SimpleGrid>
      <Bottom/>
    </div>
  );
};

export default Details;
