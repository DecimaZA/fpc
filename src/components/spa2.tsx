import {
    Grid,
    GridItem,
    Text,
    Heading,
    VStack,
    Center,
    Box,
} from '@chakra-ui/react';

const Spa2 = () => (
    <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        h="calc(100vh)"
        w="100%"
    >
        <GridItem
            rowStart={1}
            colStart={1}
            colSpan={6}
        >
            <Center
                h="100%"
            >
                <VStack>
                    <Text
                        as="b"
                        fontFamily="circularBold"
                        fontSize="1.5rem"
                    >
                        We have partnered with Firearms Guardian
                        and a professional firearms attorney for written motivations
                    </Text>
                    <Text
                        fontFamily="circularBook"
                        fontSize="1rem"
                    >
                        Our standard subscription service fee is R99.00 per month, but you can tier up for more benefits!
                    </Text>
                </VStack>
            </Center>
        </GridItem>
        <GridItem
            rowStart={2}
            colStart={3}
            colEnd={5}
        >
            <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={3}
            >
                <GridItem
                    colStart={1}
                    border="2px"
                    borderRadius="1rem"
                >
                    <Center
                        h="100%"
                        margin="5px"
                    >
                        <VStack>
                            <Heading
                                fontSize="1rem"
                                fontFamily="circularBold"
                                color="#f1564a"
                            >
                                FPC Flagbearer
                            </Heading>
                            <Text
                                fontFamily="circularBook"
                                align="justify"
                            >
                                The standard and minimum contribution for
                                access to any FPC benefits. 6 or 12 month
                                subscriptions billed monthly or upfront with
                                1 month discount.
                            </Text>
                            <Text
                                fontFamily="circularBook"
                            >
                                R99.00 p/m
                            </Text>
                        </VStack>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={2}
                    border="2px"
                    borderRadius="1rem"
                >
                    <Center
                        h="100%"
                        margin="5px"
                    >
                        <VStack>
                            <Heading
                                fontSize="1rem"
                                fontFamily="circularBold"
                                color="#f1564a"
                            >
                                FPC Insured
                            </Heading>
                            <Text
                                fontFamily="circularBook"
                                align="justify"
                            >
                                FPC Flagbearer with Option 1 Firearms Guardian
                                insurance for defensive firearm use. 6 or 12 month
                                subscriptions billed monthly or upfront with a small
                                discount.
                            </Text>
                            <Text
                                fontFamily="circularBook"
                            >
                                R200.00 p/m
                            </Text>
                        </VStack>
                    </Center>
                </GridItem>
                <GridItem
                    colStart={3}
                    border="2px"
                    borderRadius="1rem"
                >
                    <Center
                        h="100%"
                        margin="5px"
                    >
                        <VStack>
                        <Heading
                                fontSize="1rem"
                                fontFamily="circularBold"
                                color="#f1564a"
                            >
                                FPC Insured Plus
                            </Heading>
                            <Text
                                fontFamily="circularBook"
                                align="justify"
                            >
                                FPC Flagbearer with Option 2 Firearms Guardian
                                insurance for defensive firearm use. 6 or 12 month
                                subscriptions billed monthly or upfront with a small
                                discount.
                            </Text>
                            <Text
                                fontFamily="circularBook"
                            >
                                R310.00 p/m
                            </Text>
                        </VStack>
                    </Center>
                </GridItem>
            </Grid>
        </GridItem>
        <GridItem
            rowStart={4}
            colStart={1}
            colSpan={6}
        >
            <Center>
                <VStack>
                    <Text
                        fontFamily="circularBook"
                        fontSize="1.5rem"
                    >
                        FPC subscribers will receive access to discounted motivations at a flat rate.
                    </Text>
                    <Text
                        fontFamily="circularBook"
                        fontSize="1.5rem"
                    >
                        For more information regarding these rates, please contact us.
                    </Text>
                </VStack>
            </Center>
        </GridItem>
        <GridItem
            rowStart={5}
            colStart={1}
            colSpan={6}
        >
            <Center>
                PAYFAST PORTAL
            </Center>
        </GridItem>
    </Grid>
);

export default Spa2;
