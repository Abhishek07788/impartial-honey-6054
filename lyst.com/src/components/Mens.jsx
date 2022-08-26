import {
  SimpleGrid,
  Text,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import "../css/mens.css";
import Bottom from "../Navbar/Bottom";
import mendata from "../js/db2.json";
import { useState } from "react";
import { ModalComponent } from "./Modal";
//console.log('mendata: ', mendata);

const Mens = () => {
  const [data1, setData1] = useState(mendata.mensData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
  };

  return (
    <div>
      <SimpleGrid top="0" mt={140} w={"100%"} columns={1} spacing={10}>
        <Box bg="#f5f4f2" borderBottom={"1px solid black"}>
          <Text
            fontSize="4xl"
            ml={[150, 150, 375]}
            bg={"#f5f4f2"}
            textAlign={"left"}
            p={7}
          >
            CLOTHING FOR MEN
          </Text>
        </Box>
      </SimpleGrid>
      <div className="sidebar">
        <div>
          <ul>
            <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
              CATEGORIES
            </Text>
            <RadioGroup defaultValue="2">
              <Stack p={["2", "3", "5"]} spacing={2} direction="column">
                <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                  Tshirts(78255)
                </Radio>
                <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                  Lounge Tshirts(801)
                </Radio>
              </Stack>
            </RadioGroup>
          </ul>

          <hr />

          <ul>
            <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
              BRAND
            </Text>
            <RadioGroup defaultValue="2">
              <Stack p={["2", "3", "5"]} spacing={2} direction="column">
                <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                  Roadster(3119)
                </Radio>
                <Radio colorScheme="green" value="2" size={["sm", "md", "lg"]}>
                  TKalt(1749)
                </Radio>
                <Radio colorScheme="green" value="3" size={["sm", "md", "lg"]}>
                  WROGN(1559)
                </Radio>
                <Radio colorScheme="green" value="4" size={["sm", "md", "lg"]}>
                  Puma(1492)
                </Radio>
                <Radio colorScheme="green" value="5" size={["sm", "md", "lg"]}>
                  Friskers(1480)
                </Radio>
                <Radio colorScheme="green" value="6" size={["sm", "md", "lg"]}>
                  HRX by Hrithik Roshan(1373)
                </Radio>
                <Radio colorScheme="green" value="7" size={["sm", "md", "lg"]}>
                  Huetrap(1267)
                </Radio>
              </Stack>
            </RadioGroup>
          </ul>

          <hr />
          <ul>
            <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
              PRICE
            </Text>
            <RadioGroup defaultValue="2">
              <Stack p={["2", "3", "5"]} spacing={2} direction="column">
                <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                  Rs. 184 to Rs. 2670(77805)
                </Radio>
                <Radio colorScheme="green" value="2" size={["sm", "md", "lg"]}>
                  Rs. 2670 to Rs. 5156(1187)
                </Radio>
                <Radio colorScheme="green" value="3" size={["sm", "md", "lg"]}>
                  Rs. 5156 to Rs. 7642(49)
                </Radio>
                <Radio colorScheme="green" value="4" size={["sm", "md", "lg"]}>
                  Rs. 7642 to Rs. 10128(14)
                </Radio>
              </Stack>
            </RadioGroup>
          </ul>
        </div>
      </div>
      <div className="right">
        <SimpleGrid columns={[1, 2, 3, 4]} padding={"10px"} spacing="0px">
          {data1.map((el, index) => (
            <Box
              key={index}
              border={"1px solid rgb(169, 166, 166)"}
              bg="white"
              height=""
              fontWeight={470}
              _hover={{
                width: "102%",
                cursor: "pointer",
              }}
            >
              <Image w={"100%"} src={el.image} alt={el.title} />
              <Text width={"90%"} m={"auto"} mt={5}>
                {el.title}
              </Text>
              <Text>Rs.{el.price}</Text>
              <Button colorScheme='teal' size='xs' onClick={() => handleClick(el)}>View Details</Button>
            </Box>
          ))}
        </SimpleGrid>
        {/*----------------- Bottom-------------- */}
        <ModalComponent
          data={selectedBox}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
        <Bottom />
      </div>
    </div>
  );
};

export default Mens;
