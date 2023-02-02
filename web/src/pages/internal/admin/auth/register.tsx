import React from "react";
import {Formik, Form, Field} from "formik";
import {Wrapper} from "../../../../components/Wrapper";
import {useRegisterUserMutation} from "../../../../generated/graphql";
import {toErrorMap} from "../../../../utils/toErrorMap";
import {useRouter} from "next/router";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {FormControl, Grid, Input} from "@material-ui/core";
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import {TextField} from "formik-material-ui";

interface registerProps {
}

const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter();
    const [, register] = useRegisterUserMutation();
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{email: "", username: "", password: ""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await register({options: values});
                    if (response.data?.register.errors) {
                        setErrors(toErrorMap(response.data.register.errors));
                    } else if (response.data?.register.admin) {
                        // worked
                        router.push("/");
                    }
                    console.log(response)
                    console.log(values)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Grid
                            direction="column"
                            xs={12}
                        >
                            <Grid
                                item
                                xs={4}
                            >
                                <FormControl style={{width: 400}}>
                                    <Field name="email" placeholder="EmailBlock" component={TextField}/>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                            >
                                <FormControl style={{width: 400}}>
                                    <Field name="username" placeholder="Логин" component={TextField}/>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                            >
                                <FormControl style={{width: 400}}>
                                    <Field name="password" placeholder="Пароль" type="password" component={TextField}/>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Box display='flex' mt={2}>
                            <NextLink href="/forgot-password">
                                <Link ml="auto">forgot password?</Link>
                            </NextLink>
                        </Box>
                        <Button
                            type="submit"
                            onClick={() => {
                                isSubmitting
                            }}
                        >
                            register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default withUrqlClient(createUrqlClient)(Register);
