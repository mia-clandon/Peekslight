import React from "react";
import {Form, Formik} from "formik";
import {Wrapper} from "../../../../components/Wrapper";
import {useLoginEmployerMutation} from "../../../../generated/graphql";
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
    const [, loginEmployer] = useLoginEmployerMutation();
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{phoneOrEmail: "", password: ""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await loginEmployer(values);
                    if (response.data?.loginEmployer.errors) {
                        setErrors(toErrorMap(response.data.loginEmployer.errors));
                    } else if (response.data?.loginEmployer.employer) {
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
                                        name="phoneOrEmail"
                                        placeholder="Phone or Email"
                                        label="Phone or Email"
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
