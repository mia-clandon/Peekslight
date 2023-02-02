import {Box, Button, FormControl, FormLabel, ModalBody, Select} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import {useIsAuth} from "../../../../utils/useIsAuth";
import {useCreateBookingDateTimeMutation} from "../../../../generated/graphql";
import {Layout} from "../../../../components/Layout";
import {InputField} from "../../../../components/InputField";
import {createUrqlClient} from "../../../../utils/createUrqlClient";

const CreateBookingDateTime: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createBookingDateTime] = useCreateBookingDateTimeMutation();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ date: "", time: "" }}
        onSubmit={async (values) => {
          const { error } = await createBookingDateTime({ input: values });
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="date" placeholder="Дата" label="Дата" />
              <FormControl>
                  <FormLabel>Выбрать время</FormLabel>
                  <Select name="time" placeholder="Select time">
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                  </Select>
              </FormControl>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              Добавить время для бронирования
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreateBookingDateTime);
