import React, {useState} from "react";
import {Layout} from "../../components/Layout";
import {Box, Grid} from "@material-ui/core";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../utils/createUrqlClient";
import MediaContent from "../service/components/MediaContent/MediaContent";
import Parametrs from "../service/components/Parametrs/Parametrs";
import Description from "../service/components/Description/Description";
import Location from "../service/components/Location/Location";
import Reviews from "../service/components/Reviews/Reviews";
import {useEmployersListQuery} from "../../generated/graphql";
import ShowParameters from "../internal/admin/employers/employer/blocks/Parameters/ShowParamaters";
import Contacts from "./Contacts/Contacts";
import HeaderPage from "./Contacts/blocks/HeaderPage/HeaderPage";
import BriefInfo from "./Contacts/blocks/BrieffInfo/BriefInfo";
import BreadCrumbsServiceId from "./BreadCrumbs/BreadCrumbs";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Employer = ({}) => {
    const [variables, setVariables] = useState({
        limit: 4,
        cursor: null as null | string,
    });

    const [{data, error, fetching}] = useEmployersListQuery();
    console.log(data)

    if (!fetching && !data) {
        return (
            <div>
                <div>you got query failed for some reason</div>
                <div>{error?.message}</div>
            </div>
        );
    }


    return (
        <Layout>
            <Box sx={{flexGrow: 1}} style={{backgroundColor: '#E5E5E5'}} justifyContent="center" alignItems="center">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={11}>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center"
                                      style={{marginLeft: '30px'}}>
                                    <Grid item xs={12}>
                                        <BreadCrumbsServiceId/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <HeaderPage/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <BriefInfo/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MediaContent/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={11} style={{background: 'white', marginTop: '20px'}}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item xs={11}>
                                        <Parametrs/>
                                    </Grid>
                                    <Grid item xs={11} style={{marginTop: '20px'}}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={7}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}  style={{marginTop: '-48px'}}>
                                                        <ShowParameters/>
                                                    </Grid>
                                                    <Grid item xs={12}  style={{marginTop: '24px'}}>
                                                        <Description/>
                                                    </Grid>
                                                    <Grid item xs={12} style={{marginTop: '24px'}}>
                                                        <Location/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <Contacts/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={11} style={{marginTop: '20px'}}>
                                        <Reviews/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            }
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Employer);
