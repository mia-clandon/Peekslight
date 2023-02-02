import React from 'react';
import Grid from "@material-ui/core/Grid";

function MediaContent() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src={"./../img/media/img.png"} alt="" style={{width: '600px', height: '385px', borderRadius: '6px'}}/>
            </Grid>
            <Grid item xs={6} style={{marginLeft: '-75px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={"./../img/media/img.png"} alt="" style={{width: '310px', height: '182px', borderRadius: '6px'}}/>
                    </Grid>
                    <Grid item xs={6} style={{marginLeft: '-15px'}}>
                        <img src={"./../img/media/img.png"} alt="" style={{width: '310px', height: '182px', borderRadius: '6px'}}/>
                    </Grid>
                    <Grid item xs={6} >
                        <img src={"./../img/media/img.png"} alt="" style={{width: '310px', height: '182px', borderRadius: '6px'}}/>
                    </Grid>
                    <Grid item xs={6} style={{marginLeft: '-15px'}}>
                        <img src={"./../img/media/img.png"} alt="" style={{width: '310px', height: '182px', borderRadius: '6px'}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MediaContent;
