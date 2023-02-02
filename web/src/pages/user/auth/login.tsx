import React from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import {createUrqlClient} from "../../../utils/createUrqlClient";
import {Wrapper} from "../../../components/Wrapper";
import {useLoginMutation} from "../../../generated/graphql";
import {toErrorMap} from "../../../utils/toErrorMap";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.admin) {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              // worked
              router.push("/");
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              placeholder="username or email"
              label="Username or EmailBlock"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box display='flex' mt={2}>
              <NextLink href="/forgot-password">
                <Link ml="auto">forgot password?</Link>
              </NextLink>
            </Box>
            {/*<Button*/}
            {/*  mt={4}*/}
            {/*  type="submit"*/}
            {/*  isLoading={isSubmitting}*/}
            {/*  variantColor="teal"*/}
            {/*>*/}
            {/*  login*/}
            {/*</Button>*/}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
