import {
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
  
  export function ModalComponent({ isOpen, setIsOpen, data }) {
    const onClose = () => {
      setIsOpen(false);
    };
  
    console.log(data);
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
  
                <BreadcrumbItem>
                  <BreadcrumbLink href="/listing">Listing page</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              {data.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={data.image} alt="image"/>
              <Text> {data.title} </Text>
              <Text> {data.price} </Text>
            </ModalBody>
  
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  