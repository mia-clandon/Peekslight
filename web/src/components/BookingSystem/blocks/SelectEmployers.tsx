import React from "react";
import {useEmployersListQuery} from "../../../generated/graphql";
import {FormControl, FormLabel, MenuItem, Select} from "@material-ui/core";

function SelectEmployers() {
    const [{data}] = useEmployersListQuery();
    return (
        <FormControl>
            <FormLabel>Выбрать сотрудника</FormLabel>
            {/*<InputLabel id="employer">Выбор сотрудника</InputLabel>*/}
            <Select name="employer" id="employer" placeholder="Выбор сотрудника" style={{width: 400}}>
                {!data ? (
                    <MenuItem value="" disabled>Нет сотрудников</MenuItem>
                ) : (
                    data.employersList.map((e) =>
                        <MenuItem value={e.firstname}>{e.firstname}</MenuItem>)
                )}
            </Select>
        </FormControl>
    )
}

export default SelectEmployers;
