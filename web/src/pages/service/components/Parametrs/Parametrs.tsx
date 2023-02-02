import React from 'react';
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import ItemParametrs from "./blocks/ItemParametrs";

const itemParametrs = [
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
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
            <Grid item xs={12}  style={{marginLeft: '-12px'}}>
                <HeaderBlock props={"Параметры"}/>
            </Grid>
            <Grid item xs={12}>
                <ItemParametrs options={itemParametrs}/>
            </Grid>
        </Grid>
    )
}

export default Parametrs;
