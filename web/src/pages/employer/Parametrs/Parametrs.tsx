import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ItemParametrs from "./blocks/ItemParametrs";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import Card from "@material-ui/core/Card";

const itemParametrs = [
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '1 спальня ',
        description: 'Присутсвует холодильник в апартаментах, чтобы ваши продукты были всегда свежими.'
    },
    {
        title: '1 кровать',
        description: 'Присутсвует холодильник в апартаментах, чтобы ваши продукты были всегда свежими.'
    },
    {
        title: 'Расширенная уборка',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: 'Хозяин всегда на связи',
        description: 'Присутсвует холодильник в апартаментах, чтобы ваши продукты были всегда свежими.'
    },
    {
        title: 'Бесплатная отмена до 3:00 PM',
        description: 'В апартаментах есть отличная сеть интернета.'
    },
]

function Parametrs() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '0 10px 24px 10px',
            marginTop: '24px'
        }}
        >
            <Grid item xs={12}>
                <HeaderBlock props={"Параметры"}/>
            </Grid>
            <Grid item xs={12}>
                <ItemParametrs options={itemParametrs}/>
            </Grid>
        </Grid>
    )
}

export default Parametrs;
