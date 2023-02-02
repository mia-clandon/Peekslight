import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NextLink from "next/link";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs({options}: { options?: any; }) {
    // @ts-ignore
    return (
        <Breadcrumbs aria-label="breadcrumb">
                <NextLink href="/">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Главная
                    </Link>
                </NextLink>
            <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
    );
}




