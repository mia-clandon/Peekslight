import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardEmployerOrService from "../../../../components/Cards/CardEmployerOrService/CardEmployerOrService";

export type HorizontalScrollImagesBlockProps = HorizontalScrollImagesBlockProps & {
    title: string;
};

function HorizontalScrollImages(props: HorizontalScrollImagesBlockProps) {
    const {title: string, ...other} = props;
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={11}>
                    <Box display="flex" flexDirection="row" style={{overflowX: 'auto'}}>
                        <Grid container spacing={2} style={{margin: '10px 0'}}>
                            <Grid item xs={12}>
                                <img src={"./img/scroll/img.png"} alt="" style={{width: '379px', height: '205px'}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{margin: '10px 0'}}>
                            <Grid item xs={12}>
                                <img src={"./img/scroll/img_1.png"} alt="" style={{width: '379px', height: '205px'}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{margin: '10px 0'}}>
                            <Grid item xs={12}>
                                <img src={"./img/scroll/img_2.png"} alt="" style={{width: '379px', height: '205px'}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{margin: '10px 0'}}>
                            <Grid item xs={12}>
                                <img src={"./img/scroll/img_3.png"} alt="" style={{width: '379px', height: '205px'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HorizontalScrollImages;
