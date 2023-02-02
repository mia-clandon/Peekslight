import React from "react";
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {createUrqlClient} from "../../../../../utils/createUrqlClient";
import {Layout} from "../../../../../components/Layout";
import {useGetEmployerFromUrl} from "../../../../../utils/useGetEmployerFromUrl";
import Card from "@material-ui/core/Card";
import {createStyles, Theme} from "@material-ui/core/styles";
import ContentBlock from "./blocks/ContentBlock/ContentBlock";
import CreateParameterEmployer from "./blocks/Parameters/AddParameters";
import ShowParameters from "./blocks/Parameters/ShowParamaters";
import AddNav from "./blocks/Parameters/AddNav";
import ShowNuv from "./blocks/Parameters/ShowNuv";

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
    });

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Employer = ({}) => {
    const classes = useStyles();

    const [{data, error, fetching}] = useGetEmployerFromUrl();


    if (fetching) {
        return (
            <Layout>
                <div>loading...</div>
            </Layout>
        );
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (!data?.employer) {
        return (
            <Layout>
                <Box>could not find post</Box>
            </Layout>
        );
    }

    return (
        <Layout>
            <Grid
                direction="column"
                xs={12}
            >
                <Breadcrumbs aria-label="breadcrumb" style={{marginLeft: '22.5%'}}>
                    <NextLink href="/">
                        <Link color="inherit" href="/" onClick={handleClick}>
                            Главная
                        </Link>
                    </NextLink>
                    <NextLink href="/employers">
                        <Link color="inherit" href="/" onClick={handleClick}>
                            Сотрудники
                        </Link>
                    </NextLink>
                    <Typography color="textPrimary">{data.employer.firstname} {data.employer.lastname}</Typography>
                </Breadcrumbs>
                <Card className={classes.root} style={{paddingTop: '20px', paddingLeft: '25px',}}>
                    <ContentBlock options={data.employer}/>
                </Card>
                <Grid container justifyContent="center">
                    <Grid item xs={4}>
                        <CreateParameterEmployer props={data.employer}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ShowParameters props={data.employer}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={4}>
                        <AddNav props={data.employer}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ShowNuv props={data.employer}/>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Employer);
