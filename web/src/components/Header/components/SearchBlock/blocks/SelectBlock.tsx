import React from 'react';
import {Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {InputAdornment} from "@material-ui/core";
import {SvgIconProps} from "@material-ui/core/SvgIcon";


const useStyles = (theme: Theme) => ({
    root: {
        '& .MuiTextField-root': {
        },
    },
});
// @ts-ignore
export type SelectBlockProps = SelectBlockProps & {
    icon?: React.ElementType<SvgIconProps>;
    listOptions?: string[];
};

function SelectBlock(props: SelectBlockProps) {
    const {icon: Icon, listOptions, ...other} = props;

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                inputProps={{
                    style: {
                        fontSize: '14px',
                        lineHeight: '17.07px',
                        textAlign: 'center',
                        paddingTop: '9px',
                        paddingBottom: '9px',
                        paddingLeft: '4px',
                        borderRadius: '6px',
                        border: '1px #F0EEEE',
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon/>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                margin="dense"
            >
                {listOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </TextField>
        </form>
    );
}

export default SelectBlock;
