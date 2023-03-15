import {
    Grid,
    GridItem,
    Heading,
    VStack,
    HStack,
    Text,
    Link,
    Image,
    Button,
    AspectRatio,
    Center,
} from '@chakra-ui/react';
import {
    SocialIcon,
} from 'react-social-icons';
import {
    ArrowSquareDown,
} from 'iconsax-react';
import React, { useRef } from 'react';

import Spa1Image from '../branding/Spa1Image.jpg';
import FpcLogoWhiteGun from '../branding/FpcLogoWhiteGun.png';

const Spa1 = () => (

    <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        h="calc(100vh)"
        w="100%"
    >
        <GridItem
            colStart={1}
            rowStart={1}
            colEnd={11}
            rowEnd={8}
        >
            <img src={Spa1Image} alt="FPC page 1 background" />
        </GridItem>
        <GridItem 
            rowStart={1}
            h={{base:
                "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem",
            }}
        />
        <GridItem
            rowStart={{
                base: 2,
            }}
            colStart={2}
        >
            <AspectRatio
                maxW="8rem"
                ratio={4 / 3}
            >
                <Image
                    src={FpcLogoWhiteGun}
                    alt="FPC logo .PNG"
                />
            </AspectRatio>
        </GridItem>
        <GridItem
            rowStart={2}
            colStart={5}
        >
            <HStack
                justifyContent="right"
            >
                <Link href="https://www.facebook.com/profile.php?id=100086423772401">
                    <SocialIcon network="facebook" bgColor="white" style={{ height: "2rem", width: "2rem" }} />
                </Link>
                <Link href="https://twitter.com/FirearmPolicy">
                    <SocialIcon network="twitter" bgColor="white" style={{ height: "2rem", width: "2rem" }} />
                </Link>
                <Link href="https://youtube.com">
                    <SocialIcon network="youtube" bgColor="white" style={{ height: "2rem", width: "2rem" }} />
                </Link>
            </HStack>
        </GridItem>
        <GridItem
            rowStart={3}
            colStart={{
                base: 1, sm: 1, md: 2, lg: 1, xl: 1,
            }}
            colSpan={{
                base: 6, sm: 6, md: 4, lg: 6, xl: 6,
            }}
        >
            <VStack
                alignContent="middle"
            >
                <Heading
                    textAlign="center"
                    color="#f1564a"
                    fontFamily="BouchersSans2"
                    fontSize={{
                        base: "2rem", sm: "2rem", md: "4rem", lg: "6rem", xl: "6rem",
                    }}
                >
                    Citizens.
                </Heading>
                <Heading
                    textAlign="center"
                    color="white"
                    fontFamily="BouchersSans2"
                    fontSize={{
                        base: "2rem", sm: "2rem", md: "4rem", lg: "6rem", xl: "6rem",
                    }}
                >
                    Not Subjects.
                </Heading>
            </VStack>
        </GridItem>
        <GridItem
            paddingTop={{base: "0.5rem", sm: "0.5rem", md:"1rem", lg: "2rem", xl: "2rem",}}
            rowStart={5}
            colStart={2}
            colEnd={6}
        >
            <VStack>
                <Heading
                    color="white"
                    fontFamily="circularBold"
                    textAlign="center"
                    fontSize={{
                        base: "2rem", sm: "1rem", md: "2rem", lg: "2rem", xl: "2rem",
                    }}
                >
                    Welcome to the Firearms Policy Campaign
                </Heading>
                <Text
                    color="white"
                    textAlign="center"
                    fontSize={{
                        base: "1rem", sm: "1rem", md: "1rem", lg: "1.5rem", xl: "1.5rem",
                    }}
                >
                    As an unapologetic, dynamic, and energetic pro-firearm
                    entity, we aim to become the go-to source for firearm policy
                    in South Africa. Firearm owner or not, you can be the 'campaign'
                    in the Firearms Policy Campaign.
                </Text>
            </VStack>
        </GridItem>
        <GridItem
            rowStart={6}
            colStart={4}
        >
            <Center
                h="100%"
                w="0%">
                <Button
                    size="1rem"
                    color="white"
                >
                    <ArrowSquareDown size="2rem" color="grey" />
                </Button>
            </Center>
        </GridItem>
    </Grid>
);

export default Spa1;
