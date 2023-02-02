import * as React from 'react';
import Rating from '@material-ui/core/Rating';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';

const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

function RatingCore() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    console.log(value);

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                style={{color: "#FF6231"}}
                value={value}
                precision={0.5}
                readOnly
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}
                     style={{color: "#FF6231", fontSize: '16px', fontWeight: 600, fontFamily: 'SemiBold'}}
                >{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}

export default RatingCore;
