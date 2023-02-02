import React from "react";
import {useBookingDateTimeListQuery} from "../../../generated/graphql";
import {FormControl, FormLabel, MenuItem, Select} from "@material-ui/core";

function SelectBookingDateTimeList() {
    const [{data}] = useBookingDateTimeListQuery();
    return (
        <>
            <FormControl style={{width: 180, marginRight: '20px'}}>
                <FormLabel>Выбрать дату</FormLabel>
                <Select name="date" placeholder="Выбор даты">
                    {!data ? (
                        <MenuItem value="" disabled>Нет доступных дат</MenuItem>
                    ) : (
                        data.bookingDateTimeList.map((e) =>
                            <MenuItem value={e.date}>{e.date}</MenuItem>)
                    )}
                </Select>
            </FormControl>

            <FormControl style={{width: 180, marginLeft: '20px'}}>
                <FormLabel>Выбрать время</FormLabel>
                <Select name="time" placeholder="Выбор времени">
                    {!data ? (
                        <MenuItem value="" disabled>Нет доступных временных промежутков</MenuItem>
                    ) : (
                        data.bookingDateTimeList.map((e) =>
                            <MenuItem value={e.time}>{e.time}</MenuItem>)
                    )}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectBookingDateTimeList;
