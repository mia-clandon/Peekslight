import {withUrqlClient} from "next-urql";
import React from "react";
import {createUrqlClient} from "../utils/createUrqlClient";
import {Layout} from "../components/Layout";
import {Theme} from '@material-ui/core/styles';
import ChooseEditors from "./employer/sections/ChooseEditors/ChooseEditors";

const useStyles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
});

const Employers = () => {
    // const classes = useStyles();
    //
    // const [variables, setVariables] = useState({
    //     limit: 15,
    //     cursor: null as null | string,
    // });
    //
    // const [{data, error, fetching}] = useEmployersQuery({
    //     variables,
    // });
    //
    // if (!fetching && !data) {
    //     return (
    //         <div>
    //             <div>you got query failed for some reason</div>
    //             <div>{error?.message}</div>
    //         </div>
    //     );
    // }

    return (
        <Layout>
            <ChooseEditors/>
            {/*{!data && fetching ? (*/}
            {/*    <div>loading...</div>*/}
            {/*) : (*/}
            {/*    <Grid*/}
            {/*        container*/}
            {/*        direction="column"*/}
            {/*        style={{justifyContent: 'center'}}*/}
            {/*        alignItems="flex-start"*/}
            {/*        xs={12}*/}
            {/*    >*/}
            {/*        <Grid*/}
            {/*            container*/}
            {/*            direction="row"*/}
            {/*            style={{justifyContent: 'center'}}*/}
            {/*            alignItems="flex-start"*/}
            {/*            xs={12}*/}
            {/*        >*/}
            {/*            <Grid container justify="flex-end" xs={12} sm={2}>*/}
            {/*                <SideBar/>*/}
            {/*            </Grid>*/}
            {/*            <Grid container justify="center" xs={12} sm={6} spacing={2}>*/}
            {/*                {data!.employers.employers.map((employer) => (*/}
            {/*                    <Grid key={employer.id} item xs={12} sm={4} spacing={2}>*/}
            {/*                        <EmployerCard options={employer}/>*/}
            {/*                    </Grid>*/}
            {/*                ))}*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*)}*/}
            {/*{data && data.employers.hasMore ? (*/}
            {/*    <Box display='flex'>*/}
            {/*        /!*<Button*!/*/}
            {/*        /!*    onClick={() => {*!/*/}
            {/*        /!*        setVariables({*!/*/}
            {/*        /!*            limit: variables.limit,*!/*/}
            {/*        /!*            cursor: data?.services.services[data?.services.services.length - 1].title,*!/*/}
            {/*        /!*        });*!/*/}
            {/*        /!*    }}*!/*/}
            {/*        /!*    isLoading={fetching}*!/*/}
            {/*        /!*>*!/*/}
            {/*        /!*    load more*!/*/}
            {/*        /!*</Button>*!/*/}
            {/*    </Box>*/}
            {/*) : null}*/}
        </Layout>
    )
}

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Employers);
