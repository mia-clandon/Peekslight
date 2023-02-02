import React from 'react';
import {withUrqlClient} from "next-urql";
import {Layout} from "../components/Layout";
import {createUrqlClient} from "../utils/createUrqlClient";
import Grid from "@material-ui/core/Grid";
import SearchBlock from "../components/Header/components/SearchBlock/SearchBlock";
import HorizontalScrollTopic from "./service/sections/HorizontalScrollTopic/HorizontalScrollTopic";
import Tag from "./service/sections/HorizontalScrollTopic/icons/Tag";
import HorizontalScrollImages from "./service/sections/HorizontalScrollImages/HorizontalScrollImages";

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

const Index = () => {
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
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Index);
