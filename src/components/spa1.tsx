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
            h={{base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "20px", }}
        />
        <GridItem
            rowStart={{base: 2,}}
            colStart={2}
        >
            <AspectRatio
                maxW="150px"
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
                    <SocialIcon network="facebook" bgColor="white" style={{ height: 30, width: 30 }} />
                </Link>
                <Link href="https://twitter.com/FirearmPolicy">
                    <SocialIcon network="twitter" bgColor="white" style={{ height: 30, width: 30 }} />
                </Link>
                <Link href="https://youtube.com">
                    <SocialIcon network="youtube" bgColor="white" style={{ height: 30, width: 30 }} />
                </Link>
            </HStack>
        </GridItem>
        <GridItem
            rowStart={3}
            colStart={{base: 3, sm: 3, md: 2, lg: 2,}}
            colSpan={{base: 2, sm: 2, md: 4, lg: 4,}}
        >
            <VStack
                alignContent="middle"
            >
                <Heading
                    textAlign="center"
                    color="#f1564a"
                    fontFamily="BouchersSans2"
                    fontSize={{
                        base: "25", sm: "25px", md: "50", lg: "80", xl: "120px",
                    }}
                >
                    Citizens.
                </Heading>
                <Heading
                    textAlign="center"
                    color="white"
                    fontFamily="BouchersSans2"
                    fontSize={{
                        base: "25", sm: "25px", md: "50", lg: "80px", xl: "120px",
                    }}
                >
                    Not Subjects.
                </Heading>
            </VStack>
        </GridItem>
        <GridItem
            rowStart={{base: 5, sm: 4, md: 5, lg: 5, xl: 5,}}
            colStart={2}
            colEnd={6}
        >
            <VStack>
                <Heading
                    color="white"
                    fontFamily="circularBold"
                    textAlign="center"
                    fontSize={{ base: "10px", sm: "10px", md: "20px", lg: "30px", }}
                >
                    Welcome to the Firearms Policy Campaign
                </Heading>
                <Text
                    color="white"
                    textAlign="center"
                    fontSize={{ base: "30px", sm: "10px", md: "20px", lg: "30px", }}
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
            >
                <Button
                    size="15px"
                    color="white"
                >
                    <ArrowSquareDown size="32" color="grey" />
                </Button>
            </Center>
        </GridItem>
    </Grid>
);

export default Spa1;
