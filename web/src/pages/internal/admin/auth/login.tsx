import React from "react";
import {Form, Formik} from "formik";
import {Wrapper} from "../../../../components/Wrapper";
import {useLoginMutation} from "../../../../generated/graphql";
import {toErrorMap} from "../../../../utils/toErrorMap";
import {useRouter} from "next/router";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import {InputField} from "../../../../components/InputField";
import Container from "@material-ui/core/Container";

const Login: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{usernameOrEmail: "", password: ""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await login(values);
                    if (response.data?.login.errors) {
                        setErrors(toErrorMap(response.data.login.errors));
                    } else if (response.data?.login.admin) {
                        if (typeof router.query.next === "string") {
                            router.push(router.query.next);
                        } else {
                            // worked
                            router.push("/");
                        }
                    }
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Container maxWidth="sm">
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <InputField
                                        name="usernameOrEmail"
                                        placeholder="Username or Email"
                                        label="Username or Email"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <InputField
                                        name="password"
                                        placeholder="Пароль"
                                        label="Пароль"
                                        type="password"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <Grid container spacing={4}>
                                    <Grid
                                        item
                                        xs={6}
                                    >
                                        <NextLink href="/forgot-password">
                                            <Link>Forgot password?</Link>
                                        </NextLink>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                    >
                                        <Button
                                            type="submit"
                                            onClick={() => {
                                                isSubmitting
                                            }}
                                            variant="outlined"
                                        >
                                            Войти
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default withUrqlClient(createUrqlClient)(Login);
