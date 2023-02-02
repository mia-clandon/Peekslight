import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function Line(props: SvgIconProps) {
    return (
        <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.09998" y1="0.5" x2="1.09997" y2="24.5" stroke="#F0EEEE"/>
        </svg>
    );
}

export default Line;
