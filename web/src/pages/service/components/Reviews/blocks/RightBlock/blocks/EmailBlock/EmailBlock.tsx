import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Email from "../../../../../../../../components/Cards/icons/Email";

function EmailBlock(){
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
                > masontg34@gmail.com</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    style={{
                        color: '#6D6767'
                    }}
                >
                    <Typography
                        style={{
                            font: 'Montserrat Regular',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '17.07px',
                            color: '#6D6767',
                        }}
                    >
                        Показать все контакты
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default EmailBlock
