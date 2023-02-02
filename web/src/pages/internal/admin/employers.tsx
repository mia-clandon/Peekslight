import React, {useState} from "react";
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import {useDeleteEmployerMutation, useEmployersQuery} from "../../../generated/graphql";
import {Layout} from "../../../components/Layout";
import {
    Box,
    Grid,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {createUrqlClient} from "../../../utils/createUrqlClient";
import {EditDeleteEmployerButtons} from "./employers/blocks/EditDeleteEmployerButtons";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

const Employers = () => {
        const [variables, setVariables] = useState({
            limit: 15,
            cursor: null as null | string,
        });

        const [{data, error, fetching}] = useEmployersQuery({
            variables,
        });

        const [, deleteEmployer] = useDeleteEmployerMutation();


        if (!fetching && !data) {
            return (
                <div>
                    <div>you got query failed for some reason</div>
                    <div>{error?.message}</div>
                </div>
            );
        }

        return (
            <Layout>
                {!data && fetching ? (
                    <div>loading...</div>
                ) : (
                    <Stack spacing={8}>
                        <Grid
                            direction="column"
                            xs={12}
                        >
                            <Breadcrumbs aria-label="breadcrumb"  style={{marginLeft: '22.5%'}}>
                                <NextLink href="/">
                                    <Link color="inherit" href="/" >
                                        Главная
                                    </Link>
                                </NextLink>
                                <NextLink href="/employers">
                                    <Link color="inherit" href="/">
                                        Сотрудники
                                    </Link>
                                </NextLink>
                            </Breadcrumbs>
                        </Grid>
                        <NextLink href={`/internal/admin/employers/create-employer`} as={`/internal/admin/employers/create-employer`}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '300px'}}
                                startIcon={<EditIcon/>}
                            >
                                Добавить сотрудника
                            </Button>
                        </NextLink>
                        <Box display='flex'>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Имя</TableCell>
                                            <TableCell align="left">Фамилия</TableCell>
                                            <TableCell align="left">Должность</TableCell>
                                            <TableCell align="left">Email</TableCell>
                                            <TableCell align="left">Номер телефона</TableCell>
                                            <TableCell align="left">Город</TableCell>
                                            <TableCell align="left">Ср. время</TableCell>
                                            <TableCell align="left"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data!.employers.employers.map((employer) =>
                                            !employer ? null : (<TableRow key={employer.id}>
                                                    <TableCell component="th" scope="row">
                                                        {employer.firstname}
                                                    </TableCell>
                                                    <TableCell align="left">{employer.lastname}</TableCell>
                                                    <TableCell align="left">{employer.position}</TableCell>
                                                    <TableCell align="left">{employer.email}</TableCell>
                                                    <TableCell align="left">{employer.phone}</TableCell>
                                                    <TableCell align="left">{employer.city}</TableCell>
                                                    <TableCell align="left">{employer.averageTime}</TableCell>
                                                    <TableCell align="right">
                                                        <EditDeleteEmployerButtons id={employer.id}/>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Stack>
                )}
                {/*{data && data.employers.hasMore ? (*/}
                {/*    <Flex>*/}
                {/*        <Button*/}
                {/*            onClick={() => {*/}
                {/*                setVariables({*/}
                {/*                    limit: variables.limit,*/}
                {/*                    cursor: data?.employers.employers[data?.employers.employers.length - 1].createdAt,*/}
                {/*                });*/}
                {/*            }}*/}
                {/*            isLoading={fetching}*/}
                {/*            m="auto"*/}
                {/*            my={8}*/}
                {/*        >*/}
                {/*            load more*/}
                {/*        </Button>*/}
                {/*    </Flex>*/}
                {/*) : null}*/}
            </Layout>
        );
    }
;

export default withUrqlClient(createUrqlClient, {ssr: true})(Employers);
