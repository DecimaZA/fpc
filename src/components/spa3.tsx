import {
    Grid,
    GridItem,
    Heading,
    Text,
    Circle,
    HStack,
} from '@chakra-ui/react';
import Spa3Image from '../branding/Spa3Image.jpg';

const Spa1 = () => (
    <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(2, 1fr)"
        h="calc(100vh)"
        w="100%"
    >
        <GridItem
            colStart={1}
            rowStart={1}
            colEnd={3}
            rowEnd={5}
        >
            <img src={Spa3Image} alt="FPC page 1 background image" />
        </GridItem>
        <GridItem
            rowStart={1}
            colStart={1}
        >
            <Heading
                as="b"
                color="white"
            >
                ABOUT
            </Heading>
            <Heading
                color="red"
            >
                FIREARMS POLICY CAMPAIGN
            </Heading>
        </GridItem>
        <GridItem
            rowStart={2}
            colStart={1}
        >
            <Text
                color="white"
                as="b"
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
            >
                The FPC consists of a board of directors to guide
                and mold the organisation into a sustainable entity,
                and an non-executive committee to facilitate grassroots
                initiatives and efforts as a local level.
            </Text>
        </GridItem>
        <GridItem>
            <Heading
                color="white"
            >
                Proud sponsors and supporters of the Firearms Policy Campaign
            </Heading>
        </GridItem>
        <GridItem>
            <HStack>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </HStack>
        </GridItem>
    </Grid>
);

export default Spa1;
