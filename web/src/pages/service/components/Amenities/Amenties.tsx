import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Wifi from "../../../../components/Cards/icons/Wifi";
import ItemAmenties from "./blocks/ItemAmenties";
import Button from "@material-ui/core/Button";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";

const itemAmenties = [
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
    {
        icon: Wifi,
        title: '2 гостя',
        description: 'Завтрак, обед и ужин включены в стоимость.'
    },
]

function Amenties() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '24px',
        }}
        >
            <Grid item xs={12}>
                <HeaderBlock props={"Удобства"}/>
            </Grid>
            <Grid item xs={12}>
                {itemAmenties.map((item) => (
                    <ItemAmenties icon={item.icon} title={item.title} description={item.description}/>
                ))}
            </Grid>
            <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography
                                style={{
                                    font: 'Montserrat Regular',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '19.5px',
                                    color: 'black',
                                }}
                            >
                                Показать все удобства</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {itemAmenties.map((item) => (
                                <ItemAmenties icon={item.icon} title={item.title} description={item.description}/>
                            ))}
                        </AccordionDetails>
                    </Accordion>
            </Grid>
        </Grid>
    )
}

export default Amenties;
