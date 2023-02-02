import React from 'react';
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../../../../components/HeaderBlock/HeaderBlock";
import Typography from "@material-ui/core/Typography";
import IconLocation from "./icons/IconLocation";
import IconLocationOnMap from "./icons/IconLocatioOnMap";
import {Box, Button} from "@material-ui/core";

function Location() {
    return (
        <Grid container spacing={2} style={{
            border: '1px solid #F0EEEE',
            padding: '0 10px 24px 10px',
        }}
        >
            <Grid item xs={12} style={{marginLeft: '-14px'}}>
                <HeaderBlock props={"Местоположение"}/>
            </Grid>
            <Grid item xs={7}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '35px'}}>
                    <Box>
                        <IconLocation/>
                    </Box>
                    <Box>
                        <Typography
                            style={{
                                font: 'Montserrat Regular',
                                fontSize: '16px',
                                fontWeight: 600,
                                lineHeight: '24.38px',
                                letterSpacing: '0em',
                                color: '#000000',
                                marginLeft: '6px'
                            }}
                        >20 W 34th St, New York, NY 10001, United States</Typography>
                        <Typography
                            style={{
                                font: 'Montserrat Regular',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '24.38px',
                                letterSpacing: '0em',
                                color: '#6D6767',
                                marginLeft: '6px'
                            }}
                        >40.748521759088135, -73.98566440159978</Typography>
                    </Box>
                </div>

            </Grid>
            <Grid item xs={4}>
                <Button
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '17px',
                        textAlign: 'center',
                        color: '#FF6231',
                        textTransform: 'none',
                        background: '#FFF1F1',
                        borderRadius: '6px',
                        padding: '9px 76px',
                    }}>
                    <IconLocationOnMap/> &nbsp; <Typography> Посмотреть</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Location;
