import React from "react";
import {useServicesListQuery} from "../../../generated/graphql";
import {FormControl, FormLabel, MenuItem, Select} from "@material-ui/core";

function SelectServices({options}: { options?: any }) {
    const [{data}] = useServicesListQuery();
    return (
        // <FormControl>
        //     <FormLabel>Выбрать услугу</FormLabel>
        //     <Select name="service" placeholder="Выбор услуги">
        //         {!data ? (
        //             <option value="" disabled>Нет сотрудников</option>
        //         ) : (
        //             data.servicesList.map((e) =>
        //                 <option value={e.title}>{e.title}</option>)
        //         )}
        //     </Select>
        // </FormControl>
        <FormControl>
            <FormLabel>Выбрать услугу</FormLabel>
            {/*<InputLabel id="employer">Выбор сотрудника</InputLabel>*/}
            <Select name="employer" id="employer" placeholder={ options === undefined ? "Выбор сотрудника" : options.title} style={{width: 400}}>
                {!data ? (
                    <MenuItem value="" disabled>Нет услуг</MenuItem>
                ) : (
                    data.servicesList.map((e) =>
                        <MenuItem value={e.title}>{e.title}</MenuItem>)
                )}
            </Select>
        </FormControl>
    )
}

export default SelectServices;
