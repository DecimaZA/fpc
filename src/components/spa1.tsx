import {
    Grid,
    GridItem,
} from '@chakra-ui/react';
import FpcFbBanner from '../branding/FpcFbBanner.jpg'

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
            colEnd={7}
            rowEnd={6}
            padding="0px"
        >
            <img src={FpcFbBanner} alt="FPC background image" />
        </GridItem>
    </Grid>
);

export default Spa1;
