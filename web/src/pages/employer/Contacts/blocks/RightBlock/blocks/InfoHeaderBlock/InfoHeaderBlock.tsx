import React from 'react';
import Grid from "@material-ui/core/Grid";
import NextLink from "next/link";
import {Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function InfoHeaderBlock() {
    return (
        <Grid container spacing={2}
              style={{
                  paddingTop: '6px',
              }}>
            <Grid item xs={12}>
                {/*<NextLink href="/employer/[id]" as={`/employer/${options.id}`}>*/}
                <NextLink href="/employer/1">
                    <Link>
                        <Typography
                            style={{
                                fontSize: '20px',
                                color: '#000000',
                                fontWeight: 600,
                                lineHeight: '24.38px',
                                textAlign: 'start'
                            }}
                        >
                            Masont G.
                        </Typography>
                    </Link>
                </NextLink>
            </Grid>
        </Grid>
    )
}

export default InfoHeaderBlock;
