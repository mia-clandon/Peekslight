import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import CardEmployerOrService from "../../../../components/Cards/CardEmployerOrService/CardEmployerOrService";
import {SvgIconProps} from "@material-ui/core/SvgIcon";
import NextLink from "next/link";
import {Link} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";

export type HorizontalScrollTopicBlockProps = HorizontalScrollTopicBlockProps & {
    icon?: React.ElementType<SvgIconProps>;
    title: string;
};

const useStyles = () =>
    createStyles({
        scrollBox: {
            "::-webkit-scrollbar": {
                height: 0,
            }
        }
    })

function HorizontalScrollTopic(props: HorizontalScrollTopicBlockProps) {
    const {icon: Icon, title: string, ...other} = props;
    const classes = useStyles()
    return (
        <Box sx={{flexGrow: 1, marginTop: '36px'}}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={11}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} justifyContent="flex-start">
                            <Box display="flex" flexDirection="row">
                                {props.icon ? <Icon/> : null}
                                <Typography
                                    style={{
                                        fontSize: '24px',
                                        color: '#000000',
                                        fontWeight: 400,
                                        lineHeight: '29.26px',
                                        marginLeft: '15px',
                                    }}
                                >
                                    {props.title}
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
                    <Box display="flex" flexDirection="row" style={{overflowX: 'auto', }} className={classes.scrollBox}>
                        <Grid container spacing={2} style={{margin: '10px 0', width: '544px'}}>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{margin: '10px 0', width: '544px'}}>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{margin: '10px 0', width: '544px'}}>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{margin: '10px 0', width: '544px'}}>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                            <Grid item xs={12}>
                                <CardEmployerOrService/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HorizontalScrollTopic;
