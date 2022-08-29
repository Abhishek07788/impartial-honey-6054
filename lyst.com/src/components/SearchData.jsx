import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Allproduct } from "../Api/Allapi";

import {
  SimpleGrid,
  Text,
  Box,
  Button,
  Image,
  Link,
  Heading,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import "../css/mens.css";
import Bottom from "../Navbar/Bottom";
import { ModalComponent } from "./Modal";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Navbar/Navbar";

const localData = () => {
  return JSON.parse(localStorage.getItem("mensData")) || [];
};

const SearchData = () => {
  const name = useContext(AppContext);
  const navigate = useNavigate();
  const [input, setInput] = useState(name);
  const [data1, setData1] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});
  const [spraid, setSpraid] = useState(localData());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  //---------modal-------------------------
  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
    localStorage.setItem("details", JSON.stringify(item));
  };


  //----------------------data fetch from api-------------
  // console.log("input",input)
  useEffect(() => {
    Allproduct(input || "mens")
      .then((res) => {
        //console.log(res);
        setData1(res);
        setError(false);
       // setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [name]);



  //-------------------loading indicate------------------
  if (loading) {
    return (
      <>
      <Heading mt={200}>loading. . .</Heading>
      <Image
      w={["40%","40%","25%","25%"]}
        style={{height:"50%", margin: "auto", marginTop: "20px" }}
        src="https://thumbs.gfycat.com/YearlyBountifulCygnet.webp"
        alt="Loading..."
      />
    </>
    );
  }


  //------------------error indicate----------------------
  if (error) {
    return (
      <>
        <Heading mt={200}>Server Error try again...</Heading>
        <img
          style={{ width: "600px", margin: "auto", marginTop: "60px" }}
          src="https://thumbs.gfycat.com/AnotherAmazingBirdofparadise-max-1mb.gif"
          alt="Loading..."
        />
        <br />
        <br />

        <Button onClick={() => navigate(-1)} colorScheme="teal" size="lg">
          Go Back
        </Button>
      </>
    );
  }


  //---------------------add to cart-----------------------
  const addtoCart = (item) => {
    setSpraid([...spraid, item]);
    alert("Item Added.!");
    // console.log("item: ", item);
  };
  localStorage.setItem("mensData", JSON.stringify(spraid));



  //----------------------Dom------------------------------
  return (
    <div>
      <SimpleGrid top="0" mt={140} w={"100%"} columns={1} spacing={10}>
        <Box bg="#f5f4f2" borderBottom={"1px solid black"}>
          <Text
            fontSize="4xl"
            ml={[25]}
            bg={"#f5f4f2"}
            textAlign={"left"}
            p={5}
          >
            All Products
          </Text>
        </Box>
      </SimpleGrid>
      <div style={{ width: "100%" }} className="right">
        {data1.length === 0 ? (
          <>
            <Button
              onClick={() => navigate("/mens")}
              colorScheme="teal"
              size="md"
              mt="10"
            >
              Search Again.!
            </Button>
            <Image
              m={"auto"}
              w={["100%", "100%", "70%", "60%"]}
              mt="-10px"
              src="https://itinerantnotes.com/blog-theme/images/empty.gif"
              alt="empty cart"
            />
          </>
        ) : (
          ""
        )}
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
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Image
                h={["50%", "50%", "60%", "60%"]}
                w={"100%"}
                src={el.image}
                alt={el.title}
              />
              <Text
                textAlign={"left"}
                ml={4}
                width={"90%"}
                m={"auto"}
                mt={5}
                _hover={{
                  w: "90%",
                }}
              >
                {el.title}
              </Text>
              <Text fontWeight={500} textAlign={"left"} ml={4}>
                Rs.{el.price}
                <AiOutlineHeart
                  onClick={() => addtoCart(el)}
                  className="heart"
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

export default SearchData;
//dgggd
