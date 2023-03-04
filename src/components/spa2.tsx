import {
    Grid,
    GridItem,
    Text,
    VStack,
    Center,
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
            <Center>
                <VStack>
                    <Text
                        as="b"
                    >
                        We are partnering with Firearms Guardian
                        and a professional motivation writing firearms attorney
                    </Text>
                    <Text>
                        Our standard subscription service fee is R99.00 per month, but you can tier up for more benefits!
                    </Text>
                </VStack>
            </Center>
        </GridItem>
        <GridItem
            rowStart={3}
            colStart={4}
        >
            <Grid>
                <GridItem>
                    Subscription 1
                </GridItem>
                <GridItem>
                    Subscription2
                </GridItem>
                <GridItem>
                    Subscription3
                </GridItem>
            </Grid>
        </GridItem>
        <GridItem
            rowStart={4}
            colStart={3}
            colSpan={6}
        >
            <Text>
                Motivations by a professional firearms attorney
                will be at a discounted rate for FPC subscribers.
            </Text>
            <Text>
                For more information regarding these rates, please contact us.
            </Text>
        </GridItem>
        <GridItem
            colStart={4}
        >
            PAYFAST PORTAL
        </GridItem>
    </Grid>
);

export default Spa2;
