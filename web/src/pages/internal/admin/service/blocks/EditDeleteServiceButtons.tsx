import React from "react";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDeleteServiceMutation} from "../../../../../generated/graphql";

interface EditDeleteServiceButtonsProps {
    id: number;
}

class NextLink extends React.Component<{ href: string, as: string, children: ReactNode }> {
    render() {
        return null;
    }
}

export const EditDeleteServiceButtons: React.FC<EditDeleteServiceButtonsProps> = ({id}) => {
    const [, deleteService] = useDeleteServiceMutation();

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
                >
                    Редактировать
                </Button>
            </NextLink>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    deleteService({id});
                }}
            >
                Удалить
            </Button>
        </Box>
    );
};
