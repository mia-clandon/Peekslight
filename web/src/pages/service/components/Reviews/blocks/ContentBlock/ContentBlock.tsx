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
            style={{border: '1px solid #F0EEEE', margin: '10px',borderRadius: '6px'}}
        >
            <LeftBlock/>
            <RightBlock/>
        </Box>
    );
}

export default ContentBlock;
