import { SimpleGrid, Text, Box, Button, Image } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import React from "react";
import "../css/mens.css";
import Bottom from "../Navbar/Bottom";
import { useState } from "react";
import { ModalComponent } from "./Modal";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//console.log('mendata: ', mendata);

const local = () =>{
  return JSON.parse(localStorage.getItem("mensData")) || [];
}

const Cart = () => {
  const navigate = useNavigate();
  const [data1, setData1] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});
  const [total, setTotal] = useState()
  const [temp, setTemp] = useState(0)

  //-----------modal----------------
  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
    localStorage.setItem("details", JSON.stringify(item))
  };

  
  //-------------local storage--------
  useEffect(() => {
    if(data1.length===0){
      setTotal(0)
    }
    setData1(local());
  },[temp]);

  useEffect(()=>{
    totalPrice();
  },[local()])
  

  const remove = (item) => {
    setTemp(temp+1)
    data1.splice(item, 1);
    localStorage.setItem("mensData", JSON.stringify(data1));
    // window.location.reload();
  };

//--------------Total----------------------
const totalPrice = () =>{
  let sum = 0;
  data1.map((el)=>{
    sum = sum + Number(el.price)
    setTotal(sum)
  })

}






  return (
    <div>
      <SimpleGrid top="0" m="auto" mt={140} w={"80%"} columns={[1,1,2,2]} spacing={10}>
      <Box>
        <Box bg="white">
          <Text
            fontSize="3xl"
            ml={["20px","20px","85px","85px"]}
            textAlign={"left"}
            mt={10}
            w={"80%"}
            fontWeight={"600"}
          >
            Saved items
          </Text>
          <Text w={"100%"} ml={["20px","20px","85px","85px"]} textAlign={"left"} mb={7} fontSize={17}>
            Create your wishlist from across 12,000 stores in one place. We'll
            send you an alert when your favorite products go on sale or come
            back in stock.
          </Text>
        </Box>
        </Box>
        <Box textAlign={"left"}
        ml={["80px","80px",40,40]}
        mt={["-30px","-40px","60px","60px"]}
        >
          <Text fontSize={22} fontWeight={550}>Count: {data1.length}</Text>
          <Text fontSize={20} fontWeight={550}>Subtotal: Rs.{total}</Text>
        </Box>
      </SimpleGrid>
      <div style={{ width: "100%" }} className="right">
        {data1.length === 0 ? (
          <>
            <Image
              m={"auto"}
              w={["50%", "75%", "60%", "60%"]}
              mt="10px"
              src="https://i.postimg.cc/0jtTtcHt/Screenshot-2022-08-27-125653.png"
              alt="empty cart"
            />
            <Button
              onClick={() => navigate(-1)}
              m={"auto"}
              mt={10}
              w={[175, 225, 280]}
              bg="white"
              fontSize={18}
              color="black"
              border={"2px"}
              size="md"
              _hover={{ color: "white", bg: "black" }}
            >
              Find your favorites
            </Button>
          </>
        ) : (
          ""
        )}
        <SimpleGrid
          w={"70%"}
          columns={[1, 2, 3, 4]}
          padding={"10px"}
          spacing="1px"
          m="auto"
        >
          {data1.map((el, index) => (
            <Box
              key={index}
              border={"1px solid rgb(169, 166, 166)"}
              bg="white"
              height={["390px", "470px", "550px", "480px"]}
              fontWeight={470}
              w="100%"
              boxShadow="md"
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Text
                onClick={() => remove(el)}
                mb={"-1"}
                bg="#f6f6f6"
                fontSize={"26px"}
                fontWeight="500"
                w="10px"
                float={"right"}
                mr="2"
                mt={"0"}
                borderRadius="50px"
                _hover={{
                  color: "red",
                }}
              >
                x
              </Text>
              <Image
                h={["50%", "50%", "60%", "60%"]}
                w={"85%"}
                m="auto"
                mt={"7"}
                src={el.image}
                alt={el.title}
              />
              <Text
                textAlign={"left"}
                ml={0}
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
                  style={{
                    fontSize: "23px",
                    float: "right",
                    marginRight: "16",
                    color: "red",
                    marginTop: "50px",
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
                Buy now
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

export default Cart;

