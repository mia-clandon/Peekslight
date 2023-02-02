import React, {useState} from "react";
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import {Layout} from "../components/Layout";
import {UpdootSection} from "../components/UpdootSection";
import {usePostsQuery} from "../generated/graphql";
import {createUrqlClient} from "../utils/createUrqlClient";
import {Stack} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MediaContent from "./service/components/MediaContent/MediaContent";


const Feeds = () => {
    const [variables, setVariables] = useState({
        limit: 1,
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

    console.log(data?.posts.posts)
    return (
        <Layout>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Stack spacing={8}>
                    {data!.posts.posts.map((p) =>
                        !p ? null : (
                            <Box display='flex' justifyContent="center" flexDirection="column" key={p.id} style={{marginLeft: '120px'}}>
                                <Box flex={1}>
                                    <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                                        <Link>
                                            <Typography fontSize="xl">В нашей коллекции недвижимости появилась новая квартира</Typography>
                                        </Link>
                                    </NextLink>
                                    <MediaContent/>
                                    <Typography>posted by {p.creator.username}</Typography>
                                    <Box display='flex'>
                                        <Typography flex={1} mt={4}>
                                            Квартира находиться в городе Нью-Йорк, стоимость от $20.000
                                        </Typography>
                                    </Box>
                                </Box>
                                <UpdootSection post={p}/>
                            </Box>
                        )
                    )}
                </Stack>
            )}
            {data && data.posts.hasMore ? (
                <Box display='flex'>
                    <Button
                        onClick={() => {
                            setVariables({
                                limit: variables.limit,
                                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
                            });
                        }}
                    >
                        Загрузить больше
                    </Button>
                </Box>
            ) : null}
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Feeds);
