import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box, {BoxProps} from '@material-ui/core/Box';

const useStyles = makeStyles(
    () => ({
        root: {
            width: '100%',
            // padding: '32px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }),
    {name: 'BlockBackground'}
);

export type BlockBackgroundProps = BoxProps;

function BlockBackground(props: BlockBackgroundProps) {
    const {className, children, ...other} = props;
    const classes = useStyles();

    return (
        <Box component='section' bgcolor='#f4f4f4' {...other} className={clsx(classes.root, className)}>
            {children}
        </Box>
    );
}

export default BlockBackground;
