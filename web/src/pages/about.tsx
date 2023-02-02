import React from "react";
import {withUrqlClient} from "next-urql";
import {Layout} from "../components/Layout";
import {createUrqlClient} from "../utils/createUrqlClient";

const About = () => {

        return (
            <Layout>
                <h1>About us</h1>
            </Layout>
        );
    }
;

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(About);
