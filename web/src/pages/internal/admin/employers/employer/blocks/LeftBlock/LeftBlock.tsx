import React from 'react';
import {createStyles, Theme, useTheme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ThumbsUp from "../../../../../../components/Cards/icons/ThumbsUp";
import ThumbsDown from "../../../../../../components/Cards/icons/ThumbsDown";
import IconButton from "@material-ui/core/IconButton";

const useStyles = (theme: Theme) =>
    createStyles({
        cover: {
            marginTop: '16px',
            marginLeft: '16px',
        },
    });

function LeftBlock({options}: { options?: any }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.cover}>
            <Grid container justifyContent="center">
                <Grid item xs={8} justifyContent="center" alignItems="center">
                    <img src={"./../img/apartment.jpg"} alt="" style={{width: '71px', height: '71px'}}/>
                </Grid>
            </Grid>
        </Box>

    );
}

export default LeftBlock;
