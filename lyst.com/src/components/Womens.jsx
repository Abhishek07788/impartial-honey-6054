import {
  SimpleGrid,
  Text,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Image,
  Button,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";

import React, { useEffect } from "react";
import "../css/mens.css";
import Bottom from "../Navbar/Bottom";
import womendata from "../js/db2.json";
import { useState } from "react";
import { DescModal, ModalComponent } from "./Modal";
import { AiOutlineHeart } from "react-icons/ai";


const getLocalItem = () =>{
  return JSON.parse(localStorage.getItem("mensData")) || [];

}


const Womens = () => {
  const [data1, setData1] = useState(womendata.womensData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});
  const [spraid, setSpraid] = useState(getLocalItem());



  //-------------------modal---------------------
  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
    localStorage.setItem("details", JSON.stringify(item))
  };


  //--------------------------add to cart-------------
  const addtoCart = (item) => {
    setSpraid([...spraid, item]);
    alert("Item Added.!");
    // console.log("item: ", item);
  };
  useEffect(()=>{
    localStorage.setItem("mensData", JSON.stringify(spraid));
  },[spraid])


   //------------------------------dom--------------

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
            pt={10}
          >
            CLOTHING FOR WOMEN
          </Text>
        </Box>
      </SimpleGrid>
      <Box className="sidebar">
        <div>
          <ul>
            <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
              CATEGORIES
            </Text>
            <RadioGroup defaultValue="2">
              <Stack p={["2", "3", "5"]} spacing={2} direction="column">
                <Radio colorScheme="red" value="1" size={["sm", "md", "md"]}>
                  <Text fontSize={["10px","15px","18px","18px"]}>
                  Tshirts(78255)
                  </Text>
                </Radio>
                <Radio colorScheme="red" value="1" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Lounge Tshirts(801)
                  </Text>
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
                <Radio colorScheme="red" value="1" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Roadster(3119)
                  </Text>
                
                </Radio>
                <Radio colorScheme="green" value="2" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  TKalt(1749)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="3" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  WROGN(1559)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="4" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Puma(1492)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="5" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Friskers(1480)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="6" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  HRX by Hrithik Roshan(1373)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="7" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Huetrap(1267)
                  </Text>
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
                <Radio colorScheme="red" value="1" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Rs. 184 to Rs. 2670(77805)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="2" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Rs. 2670 to Rs. 5156(1187)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="3" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Rs. 5156 to Rs. 7642(49)
                  </Text>
                </Radio>
                <Radio colorScheme="green" value="4" size={["sm", "md", "md"]}>
                <Text fontSize={["10px","15px","18px","18px"]}>
                  Rs. 7642 to Rs. 10128(14)
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </ul>
        </div>
      </Box>
      <div className="right">
        <SimpleGrid columns={[1, 2, 3, 4]} padding={"10px"} spacing="1px">
          {data1.map((el, index) => (
            <Box
              key={index}
              border={"1px solid rgb(169, 166, 166)"}
              bg="white"
              height={["340px", "400px", "500px", "400px"]}
              fontWeight={470}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              <Image
                h={["50%", "50%", "60%", "60%"]}
                w={"100%"}
                src={el.image}
                alt={el.title}
              />
              <Text textAlign={"left"} ml={4} width={"90%"} m={"auto"} mt={5}>
                {el.title}
              </Text>
              <Text fontWeight={500} textAlign={"left"} ml={4}>
                Rs.{el.price}
                <AiOutlineHeart
                  className="heart"
                  onClick={() => addtoCart(el)}
                  style={{
                    fontSize: "30",
                    float: "right",
                    marginRight: "16",
                    marginTop: "30px",
                  }}
                />
              </Text>

              <Text
                textAlign={"left"}
                ml={4}
                position="absolute"
                fontWeight={400}
              >
                <AttachmentIcon /> Free People
              </Text>
              <br />
              <Button
                colorScheme={"green"}
                bg="#202020"
                color="white"
                mt={4}
                float="left"
                ml={4}
                size="xs"
                onClick={() => handleClick(el)}
              >
                View Details
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        <ModalComponent
          data={selectedBox}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
        {/*----------------- Bottom-------------- */}
        <Bottom />
      </div>
    </div>
  );
};

export default Womens;

//console.log('mendata: ', mendata);
