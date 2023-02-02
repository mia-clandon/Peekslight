import * as React from 'react';
import {experimentalStyled as styled} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Tag from "./icons/Tag";
import CardEmployerOrService from "../../../../components/Cards/CardEmployerOrService/CardEmployerOrService";
import NextLink from "next/link";
import {Link} from "@material-ui/core";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ChooseEditors() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} justifyContent="center" position="sticky">
                <Grid item xs={11}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} justifyContent="flex-start">
                            <Box style={{display: 'flex', flexDirection: 'row'}} position="sticky">
                                <Tag/>
                                <Typography
                                    style={{
                                        fontSize: '24px',
                                        color: '#000000',
                                        fontWeight: 400,
                                        lineHeight: '29.26px',
                                        marginLeft: '15px',
                                    }}
                                >
                                    Выбор редакции
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} justifyContent="flex-end">
                            <NextLink href="/employer/1">
                                <Link>
                                    <Typography
                                        style={{
                                            fontSize: '20px',
                                            color: '#6D6767',
                                            fontWeight: 400,
                                            lineHeight: '24.38px',
                                            textAlign: 'end',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        Посмотреть всё
                                    </Typography>
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={11}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item>
                            <CardEmployerOrService/>
                        </Grid>
                        <Grid item>
                            <CardEmployerOrService/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ChooseEditors;
