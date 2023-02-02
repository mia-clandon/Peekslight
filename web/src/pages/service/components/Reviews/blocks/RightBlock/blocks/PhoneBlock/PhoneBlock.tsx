import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Phone from '../../../../../../../../components/Cards/icons/Phone';

function PhoneBlock() {
    return (
        <Grid container spacing={2}
              style={{
                  paddingTop: '10px',
              }}
        >
            <Grid item xs={2}>
                <Phone/>
            </Grid>
            <Grid item xs={10}>
                <Typography
                    style={{
                        font: 'Montserrat Regular',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '19.5px',
                        color: '#120505',
                    }}
                > + 1 830-421-2568</Typography>
            </Grid>
        </Grid>
    )
}

export default PhoneBlock;
