import React from "react";
import NextLink from "next/link";
import {Box} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDeleteEmployerMutation} from "../../../../../generated/graphql";

interface EditDeleteEmployerButtonsProps {
    id: number;
}

export const EditDeleteEmployerButtons: React.FC<EditDeleteEmployerButtonsProps> = ({id}) => {
    const [, deleteEmployer] = useDeleteEmployerMutation();

    return (
        <Box>
            <NextLink href={`/internal/admin/employers/employer/[id]`} as={`/internal/admin/employers/employer/${id}`}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{marginRight: '50px'}}
                >
                    Вся информация
                </Button>
            </NextLink>
            <NextLink href={`/internal/admin/employers/employer/edit/[id]`} as={`/internal/admin/employers/employer/edit/${id}`}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{marginRight: '50px'}}
                    startIcon={<EditIcon/>}
                >
                    Редактировать
                </Button>
            </NextLink>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    deleteEmployer({id});
                }}
                startIcon={<DeleteIcon/>}
            >
                Удалить
            </Button>
        </Box>
    );
};
