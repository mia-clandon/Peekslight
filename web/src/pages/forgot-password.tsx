import React, { useState } from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Wrapper } from "../components/Wrapper";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { useForgotPasswordMutation } from "../generated/graphql";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              if an account with that email exists, we sent you can email
            </Box>
          ) : (
            <Form>
              <InputField
                name="email"
                placeholder="email"
                label="EmailBlock"
                type="email"
              />
              {/*<Button*/}
              {/*  mt={4}*/}
              {/*  type="submit"*/}
              {/*  isLoading={isSubmitting}*/}
              {/*  variantColor="teal"*/}
              {/*>*/}
              {/*  forgot password*/}
              {/*</Button>*/}
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
