import {
  Box,
  Button,
  Checkbox,
  color,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SiFlipkart } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import Bottom from "../Navbar/Bottom";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  let data = JSON.parse(localStorage.getItem("details"));
  console.log("data: ", data);

  return (
    <div>
      <Box mt={140} w="100%" p={4} color="white">
        <Heading color={"black"}>ADD DELIVERY ADDRESS</Heading>
      </Box>
      <SimpleGrid w="85%" m="auto" textAlign={"left"} mt="10" columns={[1,1,2,2]}>
        <Box mb="100px"  borderBottom={"1px"} padding="10" borderRadius={10}>
          <Text fontSize={18}>* Required fields</Text>
          <Text mt={7}>First Name *</Text>
          <Input mt={2} placeholder="" />
          <Text mt={3}>Last name *</Text>
          <Input mt={2} placeholder="" />
          <Text mt={3}>Country / region *</Text>
          <Select placeholder="🇮🇳 India">
            <option value="option1">India</option>
            <option value="option2">Usa</option>
            <option value="option3">China</option>
          </Select>
          <Text mt={3}>Address *</Text>
          <Input mt={2} placeholder="" />
          <Input mt={2} placeholder="" />
          <Text
            textDecoration={"underline"}
            color="grey"
            mt={5}
            mr="1"
            float={"right"}
          >
            Add another line
          </Text>
          <Text mt={20}>City *</Text>
          <Input mt={2} placeholder="" />
          <Text mt={3}>State *</Text>
          <Input mt={2} placeholder="" />
          <Text mt={3}>Postal or zip code *</Text>
          <Input mt={2} placeholder="" />
          <Text mt={3}>Phone *</Text>
          <Input mt={2} placeholder="" />
          <Checkbox mt={8} isDisabled defaultChecked>
            Use as billing address
          </Checkbox>
          <Text
            textDecoration={"underline"}
            mt={5}
            mb={0}
          >
            Cancle
          </Text>
              </Box>
        <Box mt={20}>
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
        <Text mb={10} mt="-20" fontSize={30} fontWeight="600">Summary</Text>
          <Image
            margin={"auto"}
            height={["500px","500px","360px","360px"]}
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
         
          <Box 
          pr={5}
          w={["100%","100%","105%","110%"]}
          display={"flex"} alignItems="center" justifyContent={"space-between"}>
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
        <Button
              mt={8}
              colorScheme={"blue"}
              _hover={
                  {
                    bg:"grey",
                  }
              }
              bg="black"
              fontSize={17}
              color="white"
              mb={150}
              onClick={()=> navigate("/paymentmethod")}
              >
              {"Save and Continue  >"}
            </Button>
      </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Bottom />
    </div>
  );
};

export default Payment;
