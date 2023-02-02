import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';
import {InputAdornment} from "@material-ui/core";
import DollarSign from "./DollarSign";
import TextField from "@material-ui/core/TextField";

function ChevronDownIcon (props: SvgIconProps) {
    return (
        <svg width="36" height="36" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#B0AEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
}

export default ChevronDownIcon;
