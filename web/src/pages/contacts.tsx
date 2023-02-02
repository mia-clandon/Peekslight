import {withUrqlClient} from "next-urql";
import React from "react";
import {Layout} from "../components/Layout";
import {createUrqlClient} from "../utils/createUrqlClient";

const Contacts = () => {

        return (
            <Layout>
                <h1>Contacts</h1>
            </Layout>
        );
    }
;

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Contacts);
