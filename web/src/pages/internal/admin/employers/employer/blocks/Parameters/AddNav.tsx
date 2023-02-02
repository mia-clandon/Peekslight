import {Form, Formik} from "formik";
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useCreateParameterEmployerMutation} from "../../../../../../../generated/graphql";
import {InputField} from "../../../../../../../components/InputField";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/core/Rating";
import StarIcon from "@material-ui/icons/Star";

const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

const CreateNavEmployer = ({props}: { props?: any }) => {
    const employerId = props.id;
    const [, createParameterEmployer] = useCreateParameterEmployerMutation();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    console.log(value);
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
                            <Typography variant="h5">Добавить навык</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <InputField
                                        name="title"
                                        placeholder="Заголовок"
                                        label="Заголовок"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="hover-feedback"
                                            style={{color: "#FF6231"}}
                                            value={value}
                                            precision={0.5}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                            }}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
                                        />
                                        {value !== null && (
                                            <Box sx={{ ml: 2 }}
                                                 style={{color: "#FF6231", fontSize: '16px', fontWeight: 600, fontFamily: 'SemiBold'}}
                                            >{labels[hover !== -1 ? hover : value]}</Box>
                                        )}
                                    </Box>
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
                                        <Typography>Добавить навык</Typography>
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

export default CreateNavEmployer;
