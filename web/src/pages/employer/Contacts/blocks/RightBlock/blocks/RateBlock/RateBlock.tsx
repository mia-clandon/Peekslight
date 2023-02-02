import React from 'react';
import Grid from "@material-ui/core/Grid";
import RatingCore from "../../../../../../service/components/RatingCore/RatingCore";

function RateBlock() {
    return (
        <Grid container spacing={3}
              style={{paddingTop: '4px'}}
        >
            <RatingCore/>
        </Grid>
    )
}

export default RateBlock;
