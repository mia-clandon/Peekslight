import React from "react";
import {Form, Formik} from "formik";
import {useRouter} from "next/router";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {useCreateBookingUserMutation} from "../../../../generated/graphql";
import {InputField} from "../../../../components/InputField";

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
    // const {isOpen, onOpen, onClose} = useDisclosure()
    const [, createBookingService] = useCreateBookingUserMutation();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
            }}>Заказать работу
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Formik
                    initialValues={{
                        idService: 1,
                        employer: "",
                        service: "",
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
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <DialogTitle id="form-dialog-title">Заказать работу</DialogTitle>
                            <DialogContent>
                                <InputField
                                    name="fio"
                                    placeholder="ФИО"
                                    label="ФИО"
                                    type="text"
                                    style={{marginTop: '20px'}}
                                />
                                <InputField
                                    name="contact"
                                    placeholder="Номер телефона/email"
                                    label="Номер телефона/email"
                                    type="text"
                                    style={{marginTop: '20px'}}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Отменить</Button>
                                <Button onClick={handleClose}
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
                                >Записаться</Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    )
}


export default CreateBookingWindow;
