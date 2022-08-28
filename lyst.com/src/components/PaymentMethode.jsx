import {
    Box,
    Button,
    Checkbox,
    color,
    Heading,
    Image,
    Input,
    OrderedList,
    Select,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { SiFlipkart } from "react-icons/si";
  import { AiOutlineHeart } from "react-icons/ai";
  import { BsPaypal ,BsFillCreditCard2FrontFill} from "react-icons/bs";
  
  import Bottom from "../Navbar/Bottom";
  import { useNavigate } from "react-router-dom";
import { useState } from "react";
  
  const PaymentMethode = () => {
    const navigate = useNavigate()
    let data = JSON.parse(localStorage.getItem("details"));
    console.log("data: ", data);
    const [ordered, setOrdered] = useState(false)







if(ordered){
    return <>
    <Image  m={"auto"} mt={250} src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" alt="hjh" />
    <Heading mt={10}>Your Order has been Booked..</Heading>
    <Button
    onClick={()=> navigate("/")}
    backgroundColor={"black"}
    color="white"
    mt={10}
    _hover={
        {
            bg:"grey"
        }
    }
    >Go Back To Home</Button>
    </>
}


  
    return (
      <div>
        <Box mt={140} w="100%" p={4} color="white">
          <Heading color={"black"}>Select your payment method</Heading>
        </Box>
        <SimpleGrid w="85%" m="auto" textAlign={"left"} mt="10" columns={[1,1,2,2]}>
          <Box>
            <Text fontSize={18}>Select your payment method</Text>
            
            <a href="https://www.paypal.com/in/home">
            <Button mt={"50px"} border="1px" w="90%" p="8">
            <BsPaypal 
            className="debit"
            /> PayPal
            </Button></a>

            <a href="https://www.paypal.com/in/home">
            <Button mt={7} mb="100" border="1px" w="90%" p="8">
            <BsFillCreditCard2FrontFill
            className="debit"
            /> Debit or credit card
            </Button></a>
              
          
          
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
                onClick={()=> setOrdered(true)}
                >
                {"Order"}
              </Button>
        </SimpleGrid>
          </Box>
        </SimpleGrid>
        <Bottom />
      </div>
    );
  };
  
  export default PaymentMethode;
  