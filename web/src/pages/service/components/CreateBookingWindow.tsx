import React from "react";
import {Form, Formik} from "formik";
import {useRouter} from "next/router";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {InputField} from "../../../components/InputField";
import {useCreateBookingUserMutation} from "../../../generated/graphql";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CreateBookingWindow({info}: {
    info?: any;
}) {
    const router = useRouter();
    const [, createBookingService] = useCreateBookingUserMutation();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const idService = "1";
    const service = "Красивая картина в Нью-Йорке";


    return (
        <>
            <Button onClick={handleOpen} style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '17px',
                textAlign: 'center',
                color: '#FFFFFF',
                textTransform: 'capitalize',
                background: '#FF6231',
                width: '100%',
                height: '36px',
            }}>Забронировать аппартаменты
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Formik
                    initialValues={{
                        idService: idService,
                        service: service,
                        dateBegin: "",
                        dateBefore: "",
                        fio: "",
                        contact: ""
                    }}
                    onSubmit={async (values) => {
                        const {error} = await createBookingService({input: values});
                        if (!error) {
                            router.push("/");
                        }
                        console.log(values)
                        console.log(error)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <DialogTitle id="form-dialog-title">Забронировать аппартаменты</DialogTitle>
                            <DialogContent>
                                <InputField
                                    name="dateBegin"
                                    placeholder="Дата заезда"
                                    label="Дата заезда"
                                    style={{marginTop: '20px'}}
                                />
                                <InputField
                                    name="dateBefore"
                                    placeholder="Дата выезда"
                                    label="Дата выезда"
                                    style={{marginTop: '20px'}}
                                />
                                <InputField
                                    name="fio"
                                    placeholder="ФИО"
                                    label="ФИО"
                                    style={{marginTop: '20px'}}
                                />
                                <InputField
                                    name="contact"
                                    placeholder="Номер телефона/email"
                                    label="Номер телефона/email"
                                    style={{marginTop: '20px'}}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Отменить</Button>
                                <Button
                                    type="submit"
                                    onClick={async () => {
                                    isSubmitting
                                }}
                                        style={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            lineHeight: '17px',
                                            textAlign: 'center',
                                            color: '#FFFFFF',
                                            textTransform: 'capitalize',
                                            background: '#FF6231',
                                            width: '50%',
                                            height: '36px',
                                        }}
                                >Забронировать</Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    )
}



export default CreateBookingWindow;
