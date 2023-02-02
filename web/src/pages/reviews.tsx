import React from 'react';
import {withUrqlClient} from "next-urql";
import {Layout} from "../components/Layout";
import {createUrqlClient} from "../utils/createUrqlClient";
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import ContentBlock from "./service/components/Reviews/blocks/ContentBlock/ContentBlock";


const Reviews = () => {
    return (
        <Layout>
            <Grid container justifyContent="center">
                <Grid item xs={11}>
                    <HeaderBlock props={"Отзывы"}/>
                </Grid>
                <Grid item xs={11}>
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
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Reviews);
