import React from "react";
import {
  background,
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import HomeData from "../js/db1";
import { useState } from "react";
import Bottom from "../Navbar/Bottom";
import { ModalComponent } from "./Modal";
//console.log("HomeData: ", HomeData1);

const Home = () => {
  const [data1, setData1] = useState(HomeData.HomeData1);
  const [data2, setData2] = useState(HomeData.HomeData2);
  const [data3, setData3] = useState(HomeData.HomeData3);
  const [data4, setData4] = useState(HomeData.HomeData4);
  const [data5, setData5] = useState(HomeData.HomeData5);
  const [data6, setData6] = useState(HomeData.mens);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
    localStorage.setItem("details", JSON.stringify(item))
  };


  return (
    <>
    
    <div className="home">
      <Image
        m="auto"
        boxSize="100%"
        h={["500px"]}
        borderBottom="1px solid black"
        src="https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg"
        alt="Dan Abramov"
      />
      <div className="Homefirstrow">
        <div>
          {data1.map((item) => (
            <div onClick={() => handleClick(item)}>
              <h2>{item.title}</h2>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "0px" }} className="Homefirstrow">
        <div>
          {data2.map((item) => (
            <div onClick={() => handleClick(item)}>
              <h2>{item.title}</h2>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Homefirstrow3">
        <div>
          {data3.map((item) => (
            <div onClick={() => handleClick(item)}>
              <h2>{item.title}</h2>

              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "0px" }} className="Homefirstrow4">
        <div>
          {data4.map((item) => (
            <div onClick={() => handleClick(item)}>
              <h2>{item.title}</h2>

              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "0px" }} className="Homefirstrow4">
        <div>
          {data5.map((item) => (
            <div onClick={() => handleClick(item)}>
              <h2>{item.title}</h2>

              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "0px" }} className="Homefirstrow4">
        <div>
          {data6.map((item) => (
            <div onClick={() => handleClick(item)}>
              <h2>{item.title}</h2>

              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
      <SimpleGrid
        textAlign={"left"}
        mt={40}
        columns={[1, 2, 3, 4]}
        spacing="5px"
        border={"1px solid black"}
      >
        <Box bg="#f5f4f2" height="auto" pt={100} pb={150}>
          <Heading as="h1" ml={16} marginTop={30} size="4xl" noOfLines={1}>
            1
          </Heading>
          <Text ml={16} mt={5} fontSize="4xl">
            THE BEST PRICES
          </Text>
          <Text w={"70%"} ml={16} fontSize="md" mt={4}>
            Shop over 12,000 brands and stores in one place.
          </Text>
          <br />
          <Text ml={16} w={"70%"} fontSize="md">
            Find exactly what you want with powerful search and personal
            recommendations.
          </Text>
        </Box>
        <Box bg="#f5f4f2" height="auto" pt={100} pb={150}>
          <Heading as="h1" ml={16} marginTop={30} size="4xl" noOfLines={1}>
            2
          </Heading>
          <Text ml={16} mt={5} lineHeight={"30px"} fontSize="4xl">
            THE BIGGEST SELECTION
          </Text>
          <Text ml={16} fontSize="md" mt={4}>
            See what’s new and what’s trending.
          </Text>
          <br />
          <Text ml={16} w={"70%"} fontSize="md">
            Hit the heart to receive alerts on the latest drops from your
            favourite brands.
          </Text>
        </Box>
        <Box bg="#f5f4f2" height="auto" pt={100} pb={150}>
          <Heading as="h1" ml={16} marginTop={30} size="4xl" noOfLines={1}>
            3
          </Heading>
          <Text ml={16} mt={5} fontSize="4xl">
            THE BEST PRICES
          </Text>
          <Text w={"80%"} ml={16} fontSize="md" mt={4}>
            Compare prices and shipping options across thousands of stores.
          </Text>
          <br />
          <Text w={"70%"} ml={16} fontSize="md">
            Lyst members are notified when an item goes on sale.
          </Text>
        </Box>
        <Box
          bg="#cafc4f"
          border={"1px solid black"}
          height="auto"
          pt={100}
          pb={150}
          w={["100%","100%","302%","100%" ]}
          _hover={{
            background: "#c9bffb",
          }}
        >
          <Heading ml={16} mt={20} as="h2" size="2xl">
            SIGN UP FOR SMARTER SHOPPING
          </Heading>
          <Button
            colorScheme={"blue"}
            ml={16}
            mt={10}
            bg="black"
            color="white"
            size="md"
          >
            Join➔
          </Button>
        </Box>
      </SimpleGrid>
      <h2 className="MOST">MOST WANTED</h2>
      <div className="mostdiv">
        <div>
          <h2>CHUNKY SNEAKERS</h2>
          <h2>CASUAL HEEL SANDALS</h2>
          <h2>TORY BURCH MILLER SANDALS</h2>
          <h2>MIU MIU MATELASSE</h2>
          <h2>SAINT LAURENT TRIBUTE</h2>
          <h2>VEJA V12 SNEAKERS</h2>
          <h2>REEBOK INSTAPUMP SNEAKERS</h2>
          <h2>NIKE STEFAN JANOSKI MAX SNEAKERS</h2>
          <h2>MEN'S STRIPED JOGGERS</h2>
          <h2>LEOPARD-PRINT SHIRTS</h2>
        </div>
      </div>
      <div className="womens">
        <div>
          <div style={{marginLeft:"440px"}}>
            <h2>WOMEN'S CLOTHING</h2>
            <div>
              <p>Beachwear and swimwear outfits</p>
              <p>Jackets</p>
              <p>Lingerie</p>
              <p>Jumpsuits and rompers</p>
              <p>Activewear, gym and workout clothes</p>
              <p>Pants, Slacks and Chinos</p>
              <p>Suits</p>
              <p>Hosiery</p>
            </div>
          </div>
          <div>
            <h2>MEN'S CLOTHING</h2>
            <div>
              <p>Shirts</p>
              <p>Beachwear</p>
              <p>Jackets</p>
              <p>Activewear, gym and workout clothes</p>
              <p>Pants, Slacks and Chinos</p>
              <p>Suits</p>
              <p>Sweaters and knitwear</p>
              <p>Jeans</p>
            </div>
          </div>
          <div>
            <h2>WOMEN'S SHOES</h2>
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p>Flats and flat shoes</p>
              <p>Heels</p>
              <p>Sneakers</p>
              <p>Boots</p>
            </div>
          </div>
          <div>
            <h2>WOMEN'S CLOTHING</h2>
            <div>
              <p>Beachwear and swimwear outfits</p>
              <p>Jackets</p>
              <p>Lingerie</p>
              <p>Jumpsuits and rompers</p>
              <p>Activewear, gym and workout clothes</p>
              <p>Pants, Slacks and Chinos</p>
              <p>Suits</p>
              <p>Hosiery</p>
            </div>
          </div>
          <div>
            <h2>MEN'S CLOTHING</h2>
            <div>
              <p>Shirts</p>
              <p>Beachwear</p>
              <p>Jackets</p>
              <p>Activewear, gym and workout clothes</p>
              <p>Pants, Slacks and Chinos</p>
              <p>Suits</p>
              <p>Sweaters and knitwear</p>
              <p>Jeans</p>
            </div>
          </div>
          <div>
            <h2>WOMEN'S SHOES</h2>
            <div>
              <p>Pants, Slacks and Chinos</p>
              <p>Suits</p>
              <p>Sweaters and knitwear</p>
              <p>Jeans</p>
              <p>Flats and flat shoes</p>
              <p>Heels</p>
              <p>Sneakers</p>
              <p>Boots</p>
              <p>Sneakers</p>
              <p>Jeans</p>
            </div>
          </div>
          <div>
            <h2>MEN'S SHOES</h2>
            <div>
              <p>Suits</p>
              <p>Sweaters and knitwear</p>
              <p>Jeans</p>
              <p>Flats and flat shoes</p>
              <p>Sandals, slides and flip flops</p>
              <p>Lace-ups</p>
              <p>Slip-on shoes</p>
              <p>Boots</p>
              <p>Sneakers</p>
            </div>
          </div>
          <div>
            <h2>WOMEN'S ACCESSORIES</h2>
            <div>
              <p>Headbands, hair clips and hair accessories</p>
              <p>Face masks</p>
              <p>Gloves</p>
              <p>Belts</p>
              <p>Watches</p>
              <p>Umbrellas</p>
              <p>Phone cases</p>
              <p>Scarves and mufflers</p>
            </div>
          </div>
          <div>
            <h2>MEN'S ACCESSORIES</h2>
            <div>
              <p>Ties</p>
              <p>Face masks</p>
              <p>Gloves</p>
              <p>Belts</p>
              <p>Watches</p>
              <p>Cufflinks</p>
              <p>Scarves and mufflers</p>
              <p>Hats</p>
            </div>
          </div>
          <div>
            <h2>WOMEN'S BAGS</h2>
            <div>
              <p>Luggage and suitcases</p>
              <p>Hobo bags and purses</p>
              <p>Shoulder bags</p>
              <p>Clutches and evening bags</p>
              <p>Duffel bags and weekend bags</p>
              <p>Crossbody bags and purses</p>
              <p>Backpacks</p>
              <p>Briefcases and work bags</p>
            </div>
          </div>
          <div>
            <h2>MEN'S BAGS</h2>
            <div>
              <p>Luggage and suitcases</p>
              <p>Duffel bags and weekend bags</p>
              <p>Toiletry bags and wash bags</p>
              <p>Backpacks</p>
              <p>Briefcases and laptop bags</p>
              <p>Belt Bags, waist bags and fanny packs</p>
              <p>Pouches and wristlets</p>
              <p>Tote bags</p>
            </div>
          </div>
          <div>
            <h2>WOMEN'S JEWELRY</h2>
            <div>
              <p>Briefcases and laptop bags</p>
              <p>Belt Bags, waist bags and fanny packs</p>
              <p>Pouches and wristlets</p>
              <p>Necklaces</p>
              <p>Rings</p>
              <p>Brooches</p>
              <p>Earrings and ear cuffs</p>
              <p>Bracelets</p>
            </div>
          </div>
          <div>
            <h2>MEN'S JEWELRY</h2>
            <div>
              <p>Necklaces</p>
              <p>Rings</p>
              <p>Brooches</p>
              <p>Briefcases and laptop bags</p>
              <p>Belt Bags, waist bags and fanny packs</p>
              <p>Pouches and wristlets</p>
              <p>Earrings and ear cuffs</p>
              <p>Bracelets</p>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent
          data={selectedBox}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
        {/*----------------- Bottom-------------- */}
        <Bottom />
    </div>
    </>
  );
};

export default Home;
