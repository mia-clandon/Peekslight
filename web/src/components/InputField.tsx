import React, {InputHTMLAttributes} from "react";
import {Field, useField} from "formik";
import {FormControl, Grid} from "@material-ui/core";
import {TextField} from "formik-material-ui";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    textarea?: boolean;
};

// // '' => false
// // 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = ({
                                                          label,
                                                          defaultValue,
                                                          textarea,
                                                          size: _,
                                                          ...props
                                                      }) => {
    let InputOrTextarea = Field;
    const [field, {error}] = useField(props);
    return (
        <Grid
            item
            xs={4}
        >
            <FormControl>
                {error ?
                    <InputOrTextarea {...field} {...props} error helperText="Incorrect entry." id={field.name} required
                                     variant="outlined"
                                     label={label}
                                     defaultValue={defaultValue}
                                     component={TextField} style={{width: 400}}/> :
                    <InputOrTextarea {...field} {...props} id={field.name} required variant="outlined"
                                     label={label}
                                     defaultValue={defaultValue}
                                     component={TextField} style={{width: 400}}/>
                }
            </FormControl>
        </Grid>

    );
};

