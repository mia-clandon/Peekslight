import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function Layers(props: SvgIconProps) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99998 1.33331L1.33331 4.66665L7.99998 7.99998L14.6666 4.66665L7.99998 1.33331Z" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.33331 11.3333L7.99998 14.6666L14.6666 11.3333" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.33331 8L7.99998 11.3333L14.6666 8" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
}

export default Layers;
