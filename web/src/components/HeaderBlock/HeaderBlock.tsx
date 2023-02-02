import React from 'react';
import Typography from '@material-ui/core/Typography';

function HeaderBlock({props}: { props: string }) {
    return (
        <Typography style={{
            font: 'Montserrat Regular',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '29.26px',
            color: '#120505',
            marginLeft: '15px',
        }}>
            {props}
        </Typography>

    );
}

export default HeaderBlock;
