import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function MapPin(props: SvgIconProps) {
    return (<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7.66669C14 12.3334 8 16.3334 8 16.3334C8 16.3334 2 12.3334 2 7.66669C2 6.07539 2.63214 4.54926 3.75736 3.42405C4.88258 2.29883 6.4087 1.66669 8 1.66669C9.5913 1.66669 11.1174 2.29883 12.2426 3.42405C13.3679 4.54926 14 6.07539 14 7.66669Z" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 9.66669C9.10457 9.66669 10 8.77126 10 7.66669C10 6.56212 9.10457 5.66669 8 5.66669C6.89543 5.66669 6 6.56212 6 7.66669C6 8.77126 6.89543 9.66669 8 9.66669Z" stroke="#FF6231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default MapPin;
