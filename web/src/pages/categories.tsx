import React from 'react';
import {withUrqlClient} from "next-urql";
import {Layout} from "../components/Layout";
import {createUrqlClient} from "../utils/createUrqlClient";
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import CardEmployerOrService from "../components/Cards/CardEmployerOrService/CardEmployerOrService";
import {Typography} from "@material-ui/core";
import CardEmployer from "../components/Cards/CardEmployer/CardEmployer";


const Categories = () => {
    return (
        <Layout>
            <Grid container justifyContent="center">
                <Grid item xs={11}>
                    <HeaderBlock props={"Категории"}/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h5">Недвижимость</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={5}>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item xs={5}>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item xs={5}>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item xs={5}>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item xs={5}>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item xs={5}>
                            <CardEmployerOrService/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Работа</Typography>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={5}>
                                <CardEmployer/>
                            </Grid>
                            <Grid item xs={5}>
                                <CardEmployer/>
                            </Grid>
                            <Grid item xs={5}>
                                <CardEmployer/>
                            </Grid>
                            <Grid item xs={5}>
                                <CardEmployer/>
                            </Grid>
                            <Grid item xs={5}>
                                <CardEmployer/>
                            </Grid>
                            <Grid item xs={5}>
                                <CardEmployer/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Categories);
