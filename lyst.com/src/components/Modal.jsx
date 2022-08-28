import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Details from "./Details";

export function ModalComponent({ isOpen, setIsOpen, data }) {
  const navigate = useNavigate();


  const Deatils = () => {
    navigate("/details");
  };
  


  const onClose = () => {
    setIsOpen(false);
  };

  //console.log(data);
  return (
    <>
    
      <Modal
        size={["xs", "xl", "2x1", "6xl"]}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            {data.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} gap="20">
            <Image
              border={"1px solid"}
              borderRadius={10}
              ml={10}
              h={400}
              w={"40%"}
              src={data.image}
              alt="image"
            />
            <Box>
              <Text fontWeight={"bold"} fontSize={25}>
                Free People
              </Text>
              <Text fontSize={18} fontWeight={500}>
                {data.title}
              </Text>
              <Text fontWeight={600} mt={3} fontSize={20}>
                Rs.{data.price}
              </Text>
              <Text mt={7}>
                From <b>Free People</b>
              </Text>
              <Button
                onClick={Deatils}
                mt={3}
                colorScheme={"blue"}
                w={[100, 150, 300]}
                bg="black"
                fontSize={20}
                color="white"
                size="md"
              >
                Shop now
              </Button>
              <Text mt={10} fontWeight={500} fontSize={20}>
                Product Details
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
