import React from 'react';
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import ItemParametrs from "../Parametrs/blocks/ItemParametrs";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Calendar() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '0 10px 24px 10px',
        }}
        >
            <Grid item xs={12} style={{marginLeft: '-14px'}}>
                <HeaderBlock props={"Занятность аппартаментов"}/>
            </Grid>
            <Grid item xs={12}>
                <img src={"./../img/calendar.png"} alt=""
                     style={{width: '92%', marginTop: '36px'}}/>
            </Grid>
        </Grid>
    )
}

export default Calendar;
