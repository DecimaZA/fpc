import {
    Grid,
    GridItem,
    Heading,
    VStack,
    HStack,
    Text,
    Button,
} from '@chakra-ui/react';
import {
    SocialIcon,
} from 'react-social-icons';

import Spa1Image from '../branding/Spa1Image.jpg';
import FpcLogoSmallPng from '../branding/FpcLogoSmallPng.png';

const Spa1 = () => (
    <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(10, 1fr)"
        h="calc(100vh)"
        w="100%"
    >
        <GridItem
            colStart={1}
            rowStart={1}
            colEnd={11}
            rowEnd={8}
            padding="0px"
        >
            <img src={Spa1Image} alt="FPC page 1 background image" />
            
        </GridItem>
        <GridItem
            rowStart={2}
            colStart={2}
        >
            <img src={FpcLogoSmallPng} alt="FPC logo .PNG" />
        </GridItem>
        <GridItem
            rowStart={2}
            colStart={9}
        >
            <HStack>
                <Button size="10px">
                    <SocialIcon network="facebook" bgColor="white" style={{height: 30, width: 30}} />
                </Button>
                <Button size="10px">
                    <SocialIcon network="facebook" bgColor="white" style={{height: 30, width: 30}} />
                </Button>
                <Button size="10px">
                    <SocialIcon network="facebook" bgColor="white" style={{height: 30, width: 30}} />
                </Button>
                <Button size="10px">
                    <SocialIcon network="facebook" bgColor="white" style={{height: 30, width: 30}} />
                </Button>
            </HStack>
        </GridItem>
        <GridItem
            rowStart={3}
            rowSpan={2}
            colStart={4}
            colSpan={4}
        >
            <VStack>
                <Heading
                    color="red"
                >
                    Citizens.
                </Heading>
                <Heading
                    color="white"
                >
                    Not Subjects.
                </Heading>
            </VStack>
            <Heading
                color="white"
            >
                Welcome to Firearms Policy Campaign
            </Heading>
            <Text
                color="white"
                align="center"
            >
                As an unapologetic, dynamic, and energetic pro-firearm
                entity, we aim to become the go-to source for firearm policy
                in South Africa. Firearm owner or not, you can be the 'campaign'
                in the Firearms Policy Campaign.
            </Text>
        </GridItem>
    </Grid>
);

export default Spa1;
