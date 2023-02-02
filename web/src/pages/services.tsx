import {withUrqlClient} from "next-urql";
import React from "react";
import {createUrqlClient} from "../utils/createUrqlClient";
import {Layout} from "../components/Layout";
import HorizontalScrollTopic from "./service/sections/HorizontalScrollTopic/HorizontalScrollTopic";
import Tag from "./service/sections/HorizontalScrollTopic/icons/Tag";
import HorizontalScrollImages from "./service/sections/HorizontalScrollImages/HorizontalScrollImages";
import SearchBlock from "../components/Header/components/SearchBlock/SearchBlock";
import Grid from "@material-ui/core/Grid";

const nameTopics = [
    {
        title: 'Подборка недвижимости',
    },
    {
        title: 'Подборка работы',
    },
    {
        title: 'Подборка сервисов',
    },
]

const Services = () => {
    //
    // const [variables, setVariables] = useState({
    //     limit: 15,
    //     cursor: null as null | string,
    // });
    //
    // const [{data, error, fetching}] = useServicesQuery();
    // console.log(data)
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
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <SearchBlock/>
                </Grid>
                <Grid item xs={11} alignContent="center">
                    <img src={"./img/main_img.png"} alt="" style={{width: '100%', marginTop: '36px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <HorizontalScrollTopic icon={Tag} title={"Выбор редакции"}/>
                </Grid>
                <Grid item xs={12}>
                    <HorizontalScrollImages/>
                </Grid>
                {nameTopics.map((item) => (
                    <Grid item xs={12}>
                        <HorizontalScrollTopic title={item.title}/>
                    </Grid>
                ))}
            </Grid>
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
)(Services);
