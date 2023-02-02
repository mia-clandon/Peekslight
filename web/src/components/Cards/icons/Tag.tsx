import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function Tag(props: SvgIconProps) {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z"
                stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 7.5H7.01" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default Tag;
