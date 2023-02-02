import React, {InputHTMLAttributes} from "react";
import {Field, useField} from "formik";
import {FormControl, Grid, InputLabel, MenuItem} from "@material-ui/core";
import {Select} from 'formik-material-ui';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    textarea?: boolean;
};

export const SelectField: React.FC<InputFieldProps> = ({
                                                           label,
                                                           options,
                                                           ...props
                                                       }) => {
    let SelectItemField = Field;
    const [field, {error}] = useField(props);
    return (
        <Grid
            item
            xs={4}
        >
            <FormControl required style={{width: 400}}>
                <InputLabel htmlFor={field.name}>{label}</InputLabel>
                <Field {...field}
                       {...props}
                       id={field.name}
                       component={Select}
                       inputProps={{
                           id: `{field.name}`
                       }}
                >
                    {!options ? (
                        <MenuItem value="" disabled>Нет категорий</MenuItem>
                    ) : (
                        options.map((e) =>
                            <MenuItem value={e.title}>{e.title}</MenuItem>)
                    )}
                </Field>

                {/*{error ?*/}
                {/*    <InputOrTextarea {...field} {...props} error helperText="Incorrect entry." id={field.name} required*/}
                {/*                     variant="outlined"*/}
                {/*                     label={label}*/}
                {/*                     defaultValue={defaultValue}*/}
                {/*                     component={TextField} style={{width: 400}}/> :*/}
                {/*    <InputOrTextarea {...field} {...props}
                id={field.name} required variant="outlined"*/}
                {/*                     label={label}*/}
                {/*                     defaultValue={defaultValue}*/}
                {/*                     component={TextField} style={{width: 400}}/>*/}
                {/*}*/}
            </FormControl>
        </Grid>

    );
};

