import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function ItemParametrs({options}: { options: any[] }) {
    return (
        <Grid container spacing={3}>
            {options.map((option) => (
                <Grid item xs={6}>
                    <Typography
                        style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '29px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#120505',
                        }}
                    >
                        {option.title}
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#6D6767',
                        }}
                    >
                        {option.description}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}

export default ItemParametrs;
