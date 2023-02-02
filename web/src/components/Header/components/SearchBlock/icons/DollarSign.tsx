import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function DollarSign(props: SvgIconProps) {
    return (
        // <SvgIcon width="52" height="52" viewBox="0 0 52 42" {...props}>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.66669V16.3334" stroke="#FF6231" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path
                d="M11.3333 4.33331H6.33333C5.71449 4.33331 5.121 4.57915 4.68342 5.01673C4.24583 5.45432 4 6.04781 4 6.66665C4 7.28548 4.24583 7.87898 4.68342 8.31656C5.121 8.75415 5.71449 8.99998 6.33333 8.99998H9.66667C10.2855 8.99998 10.879 9.24581 11.3166 9.6834C11.7542 10.121 12 10.7145 12 11.3333C12 11.9522 11.7542 12.5456 11.3166 12.9832C10.879 13.4208 10.2855 13.6666 9.66667 13.6666H4"
                stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        // </SvgIcon>
    );
}

export default DollarSign;
