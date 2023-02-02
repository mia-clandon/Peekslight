import React from "react";
import { withUrqlClient } from "next-urql";
import {useGetPostFromUrl} from "../../../../../utils/useGetPostFromUrl";
import {Layout} from "../../../../../components/Layout";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {EditDeletePostButtons} from "../../../../../components/EditDeletePostButtons";
import {createUrqlClient} from "../../../../../utils/createUrqlClient";

const Post = ({}) => {
  const [{ data, error, fetching }] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Typography mb={4}>{data.post.title}</Typography>
      <Box mb={4}>{data.post.text}</Box>
      <EditDeletePostButtons
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
