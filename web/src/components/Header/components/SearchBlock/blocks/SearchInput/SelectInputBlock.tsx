import React from 'react';
import {createStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {InputAdornment} from "@material-ui/core";
import {SvgIconProps} from "@material-ui/core/SvgIcon";
import Search from "../../icons/Search";


const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                fontFamily: 'Montserrat',
                padding: 0,
                // width: '25ch',
            },
        },
    });
// @ts-ignore
export type SelectBlockProps = SelectBlockProps & {
    icon?: React.ElementType<SvgIconProps>;
};

function SelectInputBlock(props: SelectBlockProps) {
    const {icon: Icon, ...other} = props;

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                placeholder="Поиск по пикслайт"
                onChange={handleChange}
                inputProps={{
                    style: {
                        fontSize: '18px',
                        lineHeight: '21.94px',
                        border: 'white',
                        paddingTop: '6px',
                        paddingBottom: '6px',
                        paddingLeft: '4px',
                        width: '500px'
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                margin="dense"
            >
            </TextField>
        </form>
    );
}

export default SelectInputBlock;
