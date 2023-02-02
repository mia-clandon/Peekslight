import {Form, Formik} from "formik";
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useCreateParameterEmployerMutation} from "../../../../../../../generated/graphql";
import {InputField} from "../../../../../../../components/InputField";

const CreateParameterEmployer = ({props}: { props?: any }) => {
    const employerId = props.id;
    const [, createParameterEmployer] = useCreateParameterEmployerMutation();
    return (
        <div style={{
            marginTop: '30px',
        }}>
            <Formik
                initialValues={{
                    idEmployer: employerId,
                    title: "",
                    description: "",
                }}
                onSubmit={async (values) => {
                    const {error} = await createParameterEmployer({options: values});
                    console.log(error)
                    // if (!error) {
                    //     router.push("/internal/employers");
                    // }
                    console.log(values)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Container maxWidth="md">
                            <Typography variant="h5">Добавить преимущество</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <InputField
                                        name="title"
                                        placeholder="Заголовок"
                                        label="Заголовок"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <InputField
                                        name="description"
                                        placeholder="Описание"
                                        label="Описание"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            isSubmitting
                                        }}
                                        style={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            lineHeight: '17px',
                                            textAlign: 'center',
                                            color: '#FF6231',
                                            textTransform: 'none',
                                            background: '#FFF1F1',
                                            borderRadius: '6px',
                                            padding: '16px 76px',
                                        }}
                                    >
                                        <Typography>Добавить преимущество</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateParameterEmployer;
