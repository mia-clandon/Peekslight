import {Field, Form, Formik} from "formik";
import {withUrqlClient} from "next-urql";
import {useRouter} from "next/router";
import React from "react";
import {InputField} from "../../../../../../components/InputField";
import {Layout} from "../../../../../../components/Layout";
import {useCreatePostMutation} from "../../../../../../generated/graphql";
import {createUrqlClient} from "../../../../../../utils/createUrqlClient";
import {useIsAuth} from "../../../../../../utils/useIsAuth";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {FormControl, Grid} from "@material-ui/core";
import {TextField} from "formik-material-ui";

const CreatePost: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [, createPost] = useCreatePostMutation();
    return (
        <Layout variant="small">
            <Formik
                initialValues={{title: "", text: ""}}
                onSubmit={async (values) => {
                    const {error} = await createPost({input: values});
                    if (!error) {
                        router.push("/");
                    }
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <FormControl style={{width: 400}}>
                            <Field name="title" placeholder="Ваше ФИО" component={TextField}/>
                        </FormControl> <Box mt={4}>
                        <InputField
                            textarea
                            name="text"
                            placeholder="text..."
                            label="Body"
                        />
                    </Box>
                        <Button
                            mt={4}
                            type="submit"
                            isLoading={isSubmitting}
                            variantColor="teal"
                        >
                            create post
                        </Button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
