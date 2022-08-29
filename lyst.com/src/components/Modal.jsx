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
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



export function ModalComponent({ isOpen, setIsOpen, data }) {
  const navigate = useNavigate();

//-----------redirect details page----------
  const Deatils = () => {
    navigate("/details");
  };
  

  //---------------close modal---------------

  const onClose = () => {
    setIsOpen(false);
  };


  //----------------dom-----------------------
  //console.log(data);
  return (
    <>
    
      <Modal
        size={["xs", "xl", "2x1", "6xl"]}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={["80%","80%","100%","100%"]} m={["auto"]} mt={["20","10","auto","auto"]}>
          <ModalHeader>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            {data.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <SimpleGrid m="auto"  columns={[1,1,2,2]} gap="20">
            <Box>
            <Image
              m="auto"
              border={"1px solid"}
              borderRadius={10}
              h={[200,200,400,400]}
              w={["80%","80%","90%","90%"]}
              src={data.image}
              alt="image"
            />
            </Box>
            <Box m={["auto"]}>
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
            </SimpleGrid>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
