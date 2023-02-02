import React from 'react';
import {createStyles, Theme, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Star from "../icons/Star";
import Snow from "../icons/Snow";
import Wifi from "../icons/Wifi";
import Parking from "../icons/Parking";
import DollarSign from "../../Header/components/SearchBlock/icons/DollarSign";
import Button from "@material-ui/core/Button";
import Like from "../icons/Like";
import NextLink from "next/link";
import {Link} from "@material-ui/core";

const useStyles = () =>
    createStyles({
        root: {
            display: 'flex',

        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '0px',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '184px',
            marginTop: '16px',
            marginLeft: '16px',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            // paddingLeft: theme.spacing(1),
            // paddingBottom: theme.spacing(1),
            width: '340px',
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    });

function CardEmployerOrService() {
    // @ts-ignore
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '544px'
            }}>
                <div className={classes.cover}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={"./img/apartment.jpg"} alt="" style={{width: '165px', height: '165px', marginTop: '20px'}}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Grid container spacing={2}
                        >
                            <Grid item xs={6}>
                                <Typography
                                    style={{
                                        font: 'Montserrat Regular',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: '17px',
                                        letterSpacing: '0em',
                                        color: '#FF6231',
                                    }}
                                > <Star/> 4.92</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        lineHeight: '17px',
                                        letterSpacing: '0em',
                                        color: '#6D6767',
                                        marginLeft: '8px',
                                        textAlign: 'end',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Недвижимость
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}
                              style={{
                                  paddingTop: '6px',
                              }}>
                            <Grid item xs={12}>
                                {/*<NextLink href="/employer/[id]" as={`/employer/${options.id}`}>*/}
                                <NextLink href="/service/1">
                                    <Link>
                                        <Typography
                                            style={{
                                                fontSize: '20px',
                                                color: '#000000',
                                                fontWeight: 600,
                                                lineHeight: '24.38px',
                                                textAlign: 'start'
                                            }}
                                        >
                                            Красивая квартира в Нью-Йорк
                                        </Typography>
                                    </Link>
                                </NextLink>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}
                              style={{
                                  paddingTop: '6px',
                              }}
                        >
                            <Grid item xs={6}>
                                <Typography
                                    style={{
                                        fontSize: '14px',
                                        color: '#6D6767',
                                        fontWeight: 400,
                                        lineHeight: '17.07px',
                                        textAlign: 'start'
                                    }}
                                >
                                    Нью-Йорк, США
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center" style={{
                            border: '1px solid #F0EEEE',
                            borderRadius: '6px',
                            marginTop: '6px',
                        }}>
                            <Grid item xs={6} alignItems="center">
                                <Grid container alignItems="center"
                                      style={{
                                          paddingLeft: '10px',
                                          paddingTop: '10px',
                                          paddingBottom: '5px'
                                      }}
                                      spacing={2}
                                >
                                    <Grid item xs={3}
                                    >
                                        <Snow/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Wifi/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Wifi/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Parking/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        lineHeight: '24.38px',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                        color: '#FF6231',
                                        paddingLeft: '15px'
                                    }}
                                > от <DollarSign/>20.000</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} style={{
                            marginTop: '0px',
                        }}>
                            <Grid item xs={10}>
                                <Button onClick={() => console.log('test')}
                                        style={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            lineHeight: '17px',
                                            textAlign: 'center',
                                            color: '#FF6231',
                                            textTransform: 'capitalize',
                                            background: '#FFF1F1',
                                            width: '100%'
                                        }}
                                >Забронировать</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton onClick={() => console.log('test')}
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                lineHeight: '17px',
                                                textAlign: 'center',
                                                color: '#FF6231',
                                                textTransform: 'capitalize',
                                                background: '#FFF1F1',
                                                borderRadius: '6px',
                                                height: '72%',
                                            }}
                                >
                                    <Like/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

export default CardEmployerOrService;
