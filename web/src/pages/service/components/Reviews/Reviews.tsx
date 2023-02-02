import React from 'react';
import {createStyles, Theme} from '@material-ui/core/styles';
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import ContentBlock from "./blocks/ContentBlock/ContentBlock";
import {Grid} from "@material-ui/core";

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
    });

function Reviews() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} style={{paddingTop: '20px', border: '1px solid #F0EEEE'}}>
            <Grid item xs={12}>
                <HeaderBlock props={"Отзывы"}/>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        <ContentBlock/>
                    </Grid>
                    <Grid item xs={6}>
                        <ContentBlock/>
                    </Grid>
                    <Grid item xs={6}>
                        <ContentBlock/>
                    </Grid>
                    <Grid item xs={6}>
                        <ContentBlock/>
                    </Grid>
                    <Grid item xs={6}>
                        <ContentBlock/>
                    </Grid>
                    <Grid item xs={6}>
                        <ContentBlock/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Reviews;
