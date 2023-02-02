import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function Star(props: SvgIconProps) {
    return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    d="M7.99998 1.83333L10.06 6.00666L14.6666 6.68L11.3333 9.92666L12.12 14.5133L7.99998 12.3467L3.87998 14.5133L4.66665 9.92666L1.33331 6.68L5.93998 6.00666L7.99998 1.83333Z"
                    fill="#FF6231" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>

    );
}

export default Star;
