import React from "react";
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {createStyles, Theme} from "@material-ui/core/styles";

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: '32px',
            },
        },
    });

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function BreadCrumbsServiceId() {
    const classes = useStyles();

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb"
                     style={{color: '#6D6767'}}>
            <NextLink href="/">
                <Link color="inherit" href="/" style={{textDecoration: 'underline'}}>
                    Услуги
                </Link>
            </NextLink>
            <NextLink href="/employers">
                <Link color="inherit" href="/" style={{textDecoration: 'underline'}}>
                    Недвижимость
                </Link>
            </NextLink>
            <NextLink href="/employers">
                <Link color="inherit" href="/">
                    Премиум-класс
                </Link>
            </NextLink>
            <Typography style={{color: '#6D6767'}}>Красивая квартира в Нью-Йорке</Typography>
        </Breadcrumbs>
    )
}

export default BreadCrumbsServiceId;
