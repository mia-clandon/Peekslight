import React from 'react';
import Grid from "@material-ui/core/Grid";
import Star from "../../../../../../sections/HorizontalScrollTopic/icons/Star";
import Typography from "@material-ui/core/Typography";

function RateBlock() {
    return (
        <Grid container spacing={3}
        style={{paddingTop: '4px'}}
        >
            <Grid item xs={1}>
                <Star/>
            </Grid>
            <Grid item xs={1}>
                <Star/>
            </Grid>
            <Grid item xs={1}>
                <Star/>
            </Grid>
            <Grid item xs={1}>
                <Star/>
            </Grid>
            <Grid item xs={1}>
                <Star/>
            </Grid>
            <Grid item>
                <Typography
                    style={{
                        font: 'Montserrat Regular',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        paddingTop: '2px',
                        color: '#FF6231',
                    }}
                > 5.0</Typography>
            </Grid>
        </Grid>
    )
}

export default RateBlock;
