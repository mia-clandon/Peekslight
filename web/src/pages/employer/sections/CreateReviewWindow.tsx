import React from "react";

function CreateReviewWindow() {
    // const {isOpen, onOpen, onClose} = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <>
            <h1>Test</h1>
            {/*<Button onClick={onOpen}>Leave a review</Button>*/}
            {/*<Modal*/}
            {/*    initialFocusRef={initialRef}*/}
            {/*    finalFocusRef={finalRef}*/}
            {/*    isOpen={isOpen}*/}
            {/*    onClose={onClose}*/}
            {/*>*/}
            {/*    <ModalOverlay/>*/}
            {/*    <ModalContent>*/}
            {/*        <ModalHeader>Leave a review</ModalHeader>*/}
            {/*        <ModalCloseButton/>*/}
            {/*        <ModalBody pb={6}>*/}
            {/*            <FormControl>*/}
            {/*                <FormLabel>Select employer</FormLabel>*/}
            {/*                <Select placeholder="Select employer">*/}
            {/*                    <option value="option1">Алиса Обриванова</option>*/}
            {/*                </Select>*/}
            {/*            </FormControl>*/}
            {/*            <FormControl>*/}
            {/*                <FormLabel>Select services</FormLabel>*/}
            {/*                <Select placeholder="Select services">*/}
            {/*                    <option value="option1">Test</option>*/}
            {/*                </Select>*/}
            {/*            </FormControl>*/}
            {/*            <FormControl mt={4}>*/}
            {/*                <FormLabel>Your fullname</FormLabel>*/}
            {/*                <Input placeholder="Your fullname"/>*/}
            {/*            </FormControl>*/}
            {/*            <FormControl mt={4}>*/}
            {/*                <FormLabel>Your phone</FormLabel>*/}
            {/*                <Input placeholder="Your phone"/>*/}
            {/*            </FormControl>*/}
            {/*            /!*<InputField  name="description_review"*!/*/}
            {/*            /!*             placeholder="Please write your review"*!/*/}
            {/*            /!*             label="Text Review"/>*!/*/}
            {/*        </ModalBody>*/}
            {/*        <ModalFooter>*/}
            {/*            <Button onClick={onClose}>Cancel</Button>*/}
            {/*            <Button colorScheme="blue" mr={3}>*/}
            {/*                Save*/}
            {/*            </Button>*/}
            {/*        </ModalFooter>*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
        </>
    )
}

export default CreateReviewWindow;
