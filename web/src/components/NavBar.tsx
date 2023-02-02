import React from "react";
import NextLink from "next/link";
import {useLogoutMutation, useMeEmployerQuery, useMeQuery} from "../generated/graphql";
import {isServer} from "../utils/isServer";
import {useRouter} from "next/router";
import {Box, Button, Link} from "@material-ui/core";
import Logo from "./icons/Logo";
import Typography from "@material-ui/core/Typography";

// import { LoadingButton } from '@material-ui/lab/';

interface NavBarProps {
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const router = useRouter();
    const [{fetching: logoutFetching}, logout] = useLogoutMutation();
    // @ts-ignore
    const [{data, fetching}] = [useMeQuery({
        pause: isServer(),
    }), useMeEmployerQuery()]

    let body = null;

    // data is loading
    if (fetching) {
        // user not logged in
    } else if (!data?.me) {
        body = (
            <Box display='flex' flexDirection="row" justifyContent="center" alignItems="center">
                <Logo/>
                <NextLink href="/">
                    <Link>
                        <Typography
                            style={{
                                fontSize: '20px',
                                color: '#000000',
                                fontWeight: 400,
                                lineHeight: '24.38px',
                                textAlign: 'start',
                                marginLeft: '360px'
                            }}
                        >
                            Услуги
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/categories">
                    <Link>
                        <Typography
                            style={{
                                fontSize: '20px',
                                color: '#000000',
                                fontWeight: 400,
                                lineHeight: '24.38px',
                                textAlign: 'start',
                                marginLeft: '50px'
                            }}
                        >
                            Категории
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/reviews">
                    <Link>
                        <Typography
                            style={{
                                fontSize: '20px',
                                color: '#000000',
                                fontWeight: 400,
                                lineHeight: '24.38px',
                                textAlign: 'start',
                                marginLeft: '50px'
                            }}
                        >
                            Отзывы
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/reviews">
                    <Link>
                        <Typography
                            style={{
                                fontSize: '20px',
                                color: '#000000',
                                fontWeight: 400,
                                lineHeight: '24.38px',
                                textAlign: 'start',
                                marginLeft: '50px'
                            }}
                        >
                            Новости
                        </Typography>
                    </Link>
                </NextLink>
            </Box>
        );
        // user is logged in
    } else if (data?.meEmployer) {
        body = (
            <>
                <h1>Employer</h1>
            </>
        )
    } else {
        body = (
            <Box display='flex'>
                <NextLink href="/internal/admin/employers">
                    <Typography
                        style={{
                            fontSize: '20px',
                            color: '#000000',
                            fontWeight: 600,
                            lineHeight: '24.38px',
                            textAlign: 'start'
                        }}
                    >
                        Сотрудники
                    </Typography>
                </NextLink>
                <NextLink href="/internal/admin/employers/create-employer">
                    <Typography
                        style={{
                            fontSize: '20px',
                            color: '#000000',
                            fontWeight: 600,
                            lineHeight: '24.38px',
                            textAlign: 'start'
                        }}
                    >
                        Добавить сотрудника
                    </Typography>
                </NextLink>
                <NextLink href="/internal/admin/service/create-service">
                    <Typography
                        style={{
                            fontSize: '20px',
                            color: '#000000',
                            fontWeight: 600,
                            lineHeight: '24.38px',
                            textAlign: 'start'
                        }}
                    >
                        Добавить услугу
                    </Typography>
                </NextLink>
                <NextLink href="/internal/admin/blog/post/create/create-post">
                    <Typography
                        style={{
                            fontSize: '20px',
                            color: '#000000',
                            fontWeight: 400,
                            lineHeight: '24.38px',
                            textAlign: 'start'
                        }}
                    >
                        Добавить пост в ленту
                    </Typography>
                </NextLink>
                <Box mr={2}>{data.me.username}</Box>
                <Button
                    onClick={async () => {
                        await logout();
                        router.reload();
                    }}
                    type="submit"
                >
                    Logout
                </Button>
            </Box>
        );
    }

    return (
        <Box display='flex' zIndex={1}>
            <Box display='flex' zIndex={1} top={0} style={{marginLeft: '45px'}} p={2}>
                <Box ml={"auto"}>{body}</Box>
            </Box>
        </Box>
    );
};
