import React from 'react';
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import {useState} from "react";
import {usePostsQuery} from "../../../generated/graphql";
import {Layout} from "../../../components/Layout";
import {UpdootSection} from "../../../components/UpdootSection";
import {EditDeletePostButtons} from "../../../components/EditDeletePostButtons";
import {createUrqlClient} from "../../../utils/createUrqlClient";
import {Stack} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Blog = () => {
    const [variables, setVariables] = useState({
        limit: 15,
        cursor: null as null | string,
    });

    const [{data, error, fetching}] = usePostsQuery({
        variables,
    });

    if (!fetching && !data) {
        return (
            <div>
                <div>you got query failed for some reason</div>
                <div>{error?.message}</div>
            </div>
        );
    }

    return (
        <Layout>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Stack spacing={8}>
                    {data!.posts.posts.map((p) =>
                        !p ? null : (
                            <Box display='flex' key={p.id}>
                                <UpdootSection post={p}/>
                                <Box flex={1}>
                                    <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                                        <Link>
                                            <Typography fontSize="xl">{p.title}</Typography>
                                        </Link>
                                    </NextLink>
                                    <Typography>posted by {p.creator.username}</Typography>
                                    <Box display='flex'>
                                        <Typography>
                                            {p.textSnippet}
                                        </Typography>
                                        <Box ml="auto">
                                            <EditDeletePostButtons
                                                id={p.id}
                                                creatorId={p.creator.id}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    )}
                </Stack>
            )}
            {data && data.posts.hasMore ? (
                <Box display='flex'>
                    {/*<Button*/}
                    {/*    onClick={() => {*/}
                    {/*        setVariables({*/}
                    {/*            limit: variables.limit,*/}
                    {/*            cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,*/}
                    {/*        });*/}
                    {/*    }}*/}
                    {/*    isLoading={fetching}*/}
                    {/*    m="auto"*/}
                    {/*    my={8}*/}
                    {/*>*/}
                    {/*    load more*/}
                    {/*</Button>*/}
                </Box>
            ) : null}
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Blog);
