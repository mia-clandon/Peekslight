import {withUrqlClient} from "next-urql";
import React, {useState} from "react";
import {Box, Grid} from "@material-ui/core";
import {Layout} from "../../../components/Layout";
import SideBar from "../../../components/SideBar/SideBar";
import ServiceCard from "../../service/components/ServiceCard";
import {useServicesQuery} from "../../../generated/graphql";

const Services = () => {
    const [variables, setVariables] = useState({
        limit: 15,
        cursor: null as null | string,
    });

    const [{data, error, fetching}] = useServicesQuery({
        variables,
    });

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
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Grid
                    container
                    direction="row"
                    style={{justifyContent: 'center'}}
                    alignItems="flex-start"
                    xs={12}
                >
                    <Grid container justify="flex-end" xs={12} sm={2}>
                        <SideBar/>
                    </Grid>
                    <Grid container justify="center" xs={12} sm={6} spacing={2}>
                        {data!.services.services.map((service) => (
                            <Grid key={service.id} item xs={12} sm={4} spacing={2}>
                                <ServiceCard options={service}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
            {data && data.services.hasMore ? (
                <Box display='flex'>
                    {/*<Button*/}
                    {/*    onClick={() => {*/}
                    {/*        setVariables({*/}
                    {/*            limit: variables.limit,*/}
                    {/*            cursor: data?.services.services[data?.services.services.length - 1].title,*/}
                    {/*        });*/}
                    {/*    }}*/}
                    {/*    isLoading={fetching}*/}
                    {/*>*/}
                    {/*    load more*/}
                    {/*</Button>*/}
                </Box>
            ) : null}
        </Layout>
    )
}

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Services);
