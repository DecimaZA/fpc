import {
    Grid,
    GridItem,
    Heading,
    Text,
    HStack,
    VStack,
    Button,
    Link,
} from '@chakra-ui/react';
import {
    SocialIcon,
} from 'react-social-icons';
import Spa3Image from '../branding/Spa3Image.jpg';

const Spa1 = () => (
    <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
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
            <img src={Spa3Image} alt="FPC page 1 background image" />
        </GridItem>
        <GridItem
            rowStart={2}
            colStart={2}
            colSpan={2}
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
            rowStart={3}
            colStart={2}
            colSpan={2}
        >
            <Text
                color="white"
                fontFamily="circularMedium"
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
            >
                The FPC consists of a board of directors to guide
                and mold the organisation into a sustainable entity,
                and an non-executive committee to facilitate grassroots
                initiatives and efforts as a local level.
            </Text>
        </GridItem>
        <GridItem
            rowStart={5}
            colStart={2}
            colSpan={6}
        >
            <Heading
                color="white"
                fontFamily="circularBold"
                fontSize="24px"
            >
                Proud sponsors and supporters of the Firearms Policy Campaign
            </Heading>
        </GridItem>
        <GridItem
            colStart={4}
            colSpan={2}
            rowStart={2}
            rowSpan={2}
            borderRadius="20px"
            bgColor="white"
        >
            <Text
                fontSize="20px"
                color="#f1564a"
                fontFamily="circularBold"
            >
                Contact us today
            </Text>
        </GridItem>
        <GridItem
            rowStart={6}
            colStart={2}
            colEnd={5}
        >
            <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(6, 1fr)"
            >
                <GridItem
                    colStart={2}
                >
                    <Button borderRadius="100%" h="100px" w="100px" />
                </GridItem>
                <GridItem
                    colStart={3}
                >
                    <Button borderRadius="100%" h="100px" w="100px" />
                </GridItem>
                <GridItem
                    colStart={4}
                >
                    <Button borderRadius="100%" h="100px" w="100px" />
                </GridItem>
                <GridItem
                    colStart={5}
                >
                    <Button borderRadius="100%" h="100px" w="100px" />
                </GridItem>
                <GridItem
                    colStart={6}
                >
                    <Button borderRadius="100%" h="100px" w="100px" />
                </GridItem>
                <GridItem
                    colStart={7}
                >
                    <Button borderRadius="100%" h="100px" w="100px" />
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
        {/* <GridItem
            rowStart={7}
            colStart={4}
        >
            <Text
                color="white"
            >
                Firearms Policy Campaign NPC
            </Text>
        </GridItem> */}
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
