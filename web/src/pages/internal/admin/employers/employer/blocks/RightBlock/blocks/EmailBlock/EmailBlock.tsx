import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Email from "../../../../../../../../../components/Cards/icons/Email";

function EmailBlock({options}: {options: any}){
    console.log(options)
    return(
        <Grid container spacing={2}
              style={{
                  paddingTop: '6px',
              }}
        >
            <Grid item xs={2}>
                <Email/>
            </Grid>
            <Grid item xs={10}>
                <Typography
                    style={{
                        font: 'Montserrat Regular',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '19.5px',
                        letterSpacing: '0em',
                        color: '#120505',
                    }}
                >{options.email}</Typography>
            </Grid>
        </Grid>
    )
}

export default EmailBlock
