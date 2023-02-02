import React from 'react';
import Box from "@material-ui/core/Box";
import LeftBlock from "../LeftBlock/LeftBlock";
import RightBlock from "../RightBlock/RightBlock";

function ContentBlock() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
            <LeftBlock/>
            <RightBlock/>
        </Box>
    );
}

export default ContentBlock;
