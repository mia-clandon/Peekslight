import React from "react";
import {Form, Formik} from "formik";
import {useRouter} from "next/router";
import Button from "@material-ui/core/Button";
import {
    DialogTitle,
    DialogContent,
    DialogActions, Dialog
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {useCreateReviewServiceMutation} from "../../../generated/graphql";
import SelectServices from "../../../components/BookingSystem/blocks/SelectServices";
import {options} from "colorette";

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

function CreateReviewWindow({info}: {
    info?: any;
}) {
    const router = useRouter();
    // const {isOpen, onOpen, onClose} = useDisclosure()
    const [, createReviewService] = useCreateReviewServiceMutation();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} variant="outlined" color="primary">Оставить отзыв</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Formik
                    initialValues={{title: "", description: "", service: ""}}
                    onSubmit={async (values) => {
                        const {error} = await createReviewService({input: values});
                        if (!error) {
                            router.push("/");
                        }
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <DialogTitle id="form-dialog-title">Оставить отзыв</DialogTitle>
                            <DialogContent>
                                <SelectServices options={options}/>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose} endIcon={<SendIcon />}>Записаться</Button>
                                {/*<Box>*/}
                                {/*    <LoadingButton*/}
                                {/*        endIcon={<SendIcon/>}*/}
                                {/*        loading={isSubmitting}*/}
                                {/*        loadingPosition="end"*/}
                                {/*        variant="contained"*/}
                                {/*    >*/}
                                {/*        Записаться*/}
                                {/*    </LoadingButton>*/}
                                {/*</Box>*/}
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
            {/*                    /!*    <Typography id="modal-modal-title" variant="h6" component="h2">*!/*/}
            {/*                    /!*        Забронировать*!/*/}
            {/*                    /!*    </Typography>*!/*/}
            {/*    <SelectEmployers/>*/}
            {/*    <SelectServices/>*/}
            {/*    <SelectBookingDateTime/>*/}
            {/*                    /!*    <FormControl mt={4}>*!/*/}
            {/*                    /!*        <FormLabel>Ваше ФИО</FormLabel>*!/*/}
            {/*                    /!*        <Input name="fio" placeholder="Ваше ФИО"/>*!/*/}
            {/*                    /!*    </FormControl>*!/*/}
            {/*                    /!*    <FormControl mt={4}>*!/*/}
            {/*                    /!*        <FormLabel>Ваш номер телефона или email</FormLabel>*!/*/}
            {/*                    /!*        <Input name="contact" placeholder="Ваш номер телефона или email"/>*!/*/}
            {/*                    /!*    </FormControl>*!/*/}
            {/*                    /!*</Grid>*!/*/}
            {/*                    /!*<Box display='flex'>*!/*/}
            {/*                    /!*    <LoadingButton*!/*/}
            {/*                    /!*        endIcon={<SendIcon/>}*!/*/}
            {/*                    /!*        loading={isSubmitting}*!/*/}
            {/*                    /!*        loadingPosition="end"*!/*/}
            {/*                    /!*        variant="contained"*!/*/}
            {/*                    /!*    >*!/*/}
            {/*                    /!*        Записаться*!/*/}
            {/*                    /!*    </LoadingButton>*!/*/}
            {/*                    /!*</Box>*!/*/}
            {/*                </Box>*/}
            {/*            </Form>*/}
            {/*        )}*/}
            {/*    </Formik>*/}
            {/*</Modal>*/}
            {/*<h1>test</h1>*/}
            {/*<Button onClick={onOpen}>Make an appointment</Button>*/}
            {/*<Modal*/}
            {/*    initialFocusRef={initialRef}*/}
            {/*    finalFocusRef={finalRef}*/}
            {/*    isOpen={isOpen}*/}
            {/*    onClose={onClose}*/}
            {/*>*/}
            {/*    <Formik*/}
            {/*        initialValues={{employer: "", service: "", date: "", time: "", fio: "", contact: ""}}*/}
            {/*        onSubmit={async (values) => {*/}
            {/*            const {error} = await createBookingUser({input: values});*/}
            {/*            if (!error) {*/}
            {/*                router.push("/");*/}
            {/*            }*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {({isSubmitting}) => (*/}
            {/*            <Form>*/}
            {/*                <ModalOverlay/>*/}
            {/*                <ModalContent>*/}
            {/*                    <ModalHeader>Забронировать</ModalHeader>*/}
            {/*                    <ModalCloseButton/>*/}
            {/*                    <ModalBody pb={6}>*/}
            {/*                        <SelectEmployers/>*/}
            {/*                        <SelectServices/>*/}
            {/*                        <SelectBookingDateTime/>*/}
            {/*                        <FormControl mt={4}>*/}
            {/*                            <FormLabel>Ваше ФИО</FormLabel>*/}
            {/*                            <Input name="fio" placeholder="Ваше ФИО"/>*/}
            {/*                        </FormControl>*/}
            {/*                        <FormControl mt={4}>*/}
            {/*                            <FormLabel>Ваш номер телефона или email</FormLabel>*/}
            {/*                            <Input name="contact" placeholder="Ваш номер телефона или email"/>*/}
            {/*                        </FormControl>*/}
            {/*                    </ModalBody>*/}
            {/*                    <ModalFooter>*/}
            {/*                        <Button onClick={onClose} mr={3}>Отменить</Button>*/}
            {/*                        <Button*/}
            {/*                            type="submit"*/}
            {/*                            colorScheme="blue"*/}
            {/*                            isLoading={isSubmitting}*/}
            {/*                            mr={3}>*/}
            {/*                            Записаться*/}
            {/*                        </Button>*/}
            {/*                    </ModalFooter>*/}
            {/*                </ModalContent>*/}
            {/*            </Form>*/}
            {/*        )}*/}
            {/*    </Formik>*/}
            {/*</Modal>*/}

        </>
    )
}

export default CreateReviewWindow;
