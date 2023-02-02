import React from "react";
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import {Layout} from "../../../../components/Layout";
import {useGetServiceFromUrl} from "../../../../utils/useGetServiceFromUrl";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import Box from "@material-ui/core/Box";

const Service = ({}) => {
    const [{data, error, fetching}] = useGetServiceFromUrl();

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

    if (!data?.service) {
        return (
            <Layout>
                <Box>could not find service</Box>
            </Layout>
        );
    }

    return (
        <Layout>
            <Box display='flex'>
                <NextLink href="/">
                    Main/
                </NextLink>
                <NextLink href="/employers">
                    Service/
                </NextLink>
                <NextLink href="/employers/">
                    <p>{data.service.title} </p>
                </NextLink>
            </Box>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Service);
