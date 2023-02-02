import React from "react";
import NextLink from "next/link";
import {useDeletePostMutation, useMeQuery} from "../generated/graphql";
import {Box} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

interface EditDeletePostButtonsProps {
    id: number;
    creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
                                                                                id,
                                                                                creatorId,
                                                                            }) => {
    const [{data: meData}] = useMeQuery();
    const [, deletePost] = useDeletePostMutation();

    if (meData?.me?.id !== creatorId) {
        return null;
    }

    return (
        <Box>
            <NextLink href={`/post/edit/[id]`} as={`/post/edit/${id}`}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon/>}
                >
                    Редактировать
                </Button>
                {/*<IconButton as={Link} mr={4} icon="edit" aria-label="Edit Post" />*/}
            </NextLink>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    deletePost({id});
                }}
                startIcon={<DeleteIcon/>}
            >
                Удалить
            </Button>
            {/*<IconButton*/}
            {/*  icon="delete"*/}
            {/*  aria-label="Delete Post"*/}
            {/*  onClick={() => {*/}
            {/*    deletePost({ id });*/}
            {/*  }}*/}
            {/*/>*/}
        </Box>
    );
};
