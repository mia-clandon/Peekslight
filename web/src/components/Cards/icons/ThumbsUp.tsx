import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

function ThumbsUp(props: SvgIconProps) {
    return (
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 21H3.5C2.96957 21 2.46086 20.7893 2.08579 20.4142C1.71071 20.0391 1.5 19.5304 1.5 19V12C1.5 11.4696 1.71071 10.9609 2.08579 10.5858C2.46086 10.2107 2.96957 10 3.5 10H6.5M13.5 8V4C13.5 3.20435 13.1839 2.44129 12.6213 1.87868C12.0587 1.31607 11.2956 1 10.5 1L6.5 10V21H17.78C18.2623 21.0055 18.7304 20.8364 19.0979 20.524C19.4654 20.2116 19.7077 19.7769 19.78 19.3L21.16 10.3C21.2035 10.0134 21.1842 9.72068 21.1033 9.44225C21.0225 9.16382 20.8821 8.90629 20.6919 8.68751C20.5016 8.46873 20.2661 8.29393 20.0016 8.17522C19.7371 8.0565 19.4499 7.99672 19.16 8H13.5Z" stroke="#6D6767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
}

export default ThumbsUp;
