import React from 'react';
import {createStyles, Theme, useTheme} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box";
import InfoHeaderBlock from "./blocks/InfoHeaderBlock/InfoHeaderBlock";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RatingCore from "../../../RatingCore/RatingCore";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";

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
        root: {
            width: '100%',
            border: 'none'
        },
        heading: {
            // fontSize: theme.typography.pxToRem(15),
            // fontWeight: theme.typography.fontWeightRegular,
        },
    });

function RightBlock() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.details}>
            <CardContent className={classes.content}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <InfoHeaderBlock/>
                    </Grid>
                    <Grid item xs={12}>
                        <RatingCore/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            style={{
                                font: 'Montserrat Regular',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '19.5px',
                                color: '#6D6767',
                            }}
                        >
                            Красивая, светлая, солнечная, безупречно меблированная - просторная квартира с одной
                            спальней в
                            мечтательном месте в восточной деревне Манхэттена. Супердоступное ...</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    style={{
                                        font: 'Montserrat Regular',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        lineHeight: '17.07px',
                                        color: '#6D6767',
                                    }}
                                >
                                    Посмотреть всё</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                    lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}

export default RightBlock;
