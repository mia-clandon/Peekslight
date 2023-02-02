import React from 'react';
import {createStyles, Theme, useTheme} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box";
import InfoHeaderBlock from "./blocks/InfoHeaderBlock/InfoHeaderBlock";
import PhoneBlock from "./blocks/PhoneBlock/PhoneBlock";
import EmailBlock from "./blocks/EmailBlock/EmailBlock";
import RatingCore from "../../../RatingCore/RatingCore";

const useStyles = (theme: Theme) =>
    createStyles({
        details: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '0px',
        },
        content: {
            flex: '1 0 auto',
        },
    });

function RightBlock() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.details}>
            <CardContent className={classes.content}>
                <InfoHeaderBlock/>
                <RatingCore/>
                <PhoneBlock/>
                <EmailBlock/>
            </CardContent>
        </Box>
    );
}

export default RightBlock;
