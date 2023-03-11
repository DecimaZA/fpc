import {
    Grid,
    GridItem,
    Heading,
    Text,
    HStack,
    VStack,
    Button,
    Link,
    Center,
} from '@chakra-ui/react';
import {
    SocialIcon,
} from 'react-social-icons';
import Spa3Image from '../branding/Spa3Image.jpg';

const Spa1 = () => (
    <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={3}
        h="calc(100vh)"
        w="100%"
        bgColor="black"
    >
        <GridItem
            colStart={1}
            rowStart={1}
            colEnd={7}
            rowEnd={3}
        >
            <img src={Spa3Image} alt="FPC page 1 background" />
        </GridItem>
        <GridItem
            rowStart={3}
            rowEnd={3}
            colStart={2}
            colEnd={6}
        >
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={10}
            >
                <GridItem
                    rowStart={1}
                    colStart={1}
                >
                    <VStack
                        align="left"
                    >
                        <Heading
                            as="b"
                            color="white"
                            fontFamily="BouchersSans2"
                        >
                            ABOUT
                        </Heading>
                        <Heading
                            color="#f1564a"
                            fontFamily="BouchersSans2"
                        >
                            FIREARMS POLICY
                        </Heading>
                        <Heading
                            color="#f1564a"
                            fontFamily="BouchersSans2"
                        >
                            CAMPAIGN
                        </Heading>
                    </VStack>
                </GridItem>
                <GridItem
                    rowStart={2}
                >
                    <Text
                        color="white"
                        fontFamily="circularBold"
                        align="justify"
                    >
                        The FPC is unapologetic about firearm ownership,
                        and is committed to increasing firearm choice and
                        proliferation for lawful purposes. We aspire to be
                        creating a broader and more vibrant firearm owning
                        community, backed by healthy and dynamic industry
                        partners.
                    </Text>
                    <Text
                        color="white"
                        fontFamily="circularBook"
                        align="justify"
                    >
                        The FPC consists of a board of directors to guide
                        and mold the organisation into a sustainable entity,
                        and an non-executive committee to facilitate grassroots
                        initiatives and efforts as a local level.
                    </Text>
                </GridItem>
                <GridItem
                    colStart={2}
                    rowStart={1}
                    rowEnd={4}
                >
                    <Grid
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(1, 1fr)"
                        bgColor="white"
                        borderRadius="20px"
                    >
                        <GridItem>
                            <Text
                                fontSize="20px"
                                color="#f1564a"
                                fontFamily="circularBold"
                                marginLeft="10px"
                            >
                                Contact us today
                            </Text>
                            <Text
                                fontSize="15px"
                                color="black"
                                fontFamily="circularBook"
                                marginLeft="10px"
                            >
                                Contact the FPC with any queries or feedback that you may have
                            </Text>
                            <Text
                                fontSize="15px"
                                color="black"
                                fontFamily="circularBook"
                                marginLeft="10px"
                            >
                                Email us at: admin@fpc.org.za
                            </Text>
                        </GridItem>
                        <GridItem
                            rowStart={2}
                            
                        >
                            <Text
                                fontSize="15px"
                                color="black"
                                fontFamily="circularBook"
                                margin="10px"
                                align="justify"
                            >
                                The FPC community on our Facebook Group has a wealth of information
                                and knowledge! The admins are active and respond to most, if not
                                every, post! You can search the group on Facebook, or access it
                                through the FPC Facebook Page. The Facebook social media button on
                                this website will take you the Page.
                            </Text>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </GridItem>
        <GridItem
            rowStart={5}
            colStart={1}
            colSpan={6}
        >
            <Center>
                <Heading
                    color="white"
                    fontFamily="circularBold"
                    fontSize="24px"
                >
                    Proud sponsors and supporters of the Firearms Policy Campaign
                </Heading>
            </Center>
        </GridItem>
        <GridItem
            rowStart={6}
            colStart={2}
            colEnd={6}
        >
            <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(6, 1fr)"
            >
                <GridItem
                    colStart={1}
                >
                    <Center>
                        <Button borderRadius="100%" h="100px" w="100px">Sponsor 1</Button>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={2}
                >
                    <Center>
                        <Button borderRadius="100%" h="100px" w="100px">Sponsor 2</Button>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={3}
                >
                    <Center>
                        <Button borderRadius="100%" h="100px" w="100px">Sponsor 3</Button>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={4}
                >
                    <Center>
                        <Button borderRadius="100%" h="100px" w="100px">Sponsor 4</Button>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={5}
                >
                    <Center>
                        <Button borderRadius="100%" h="100px" w="100px">Sponsor 5</Button>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={6}
                >
                    <Center>
                        <Button borderRadius="100%" h="100px" w="100px">Sponsor 6</Button>
                    </Center>
                </GridItem>
            </Grid>
        </GridItem>
        <GridItem
            rowStart={7}
            colStart={2}
        >
            <Text
                color="white"
            >
                Registration number: K2022754299
            </Text>
        </GridItem>
        <GridItem
            rowStart={7}
            colStart={5}
            colSpan={2}
        >
            <HStack
                align="right"
                spacing={4}
            >
                <Text
                color="white"
                >
                    Firearms Policy Campaign NPC
                </Text>
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
    </Grid>
);

export default Spa1;
