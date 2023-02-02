import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {SvgIconProps} from "@material-ui/core/SvgIcon";

export type ItemAmentiesBlockProps = ItemAmentiesBlockProps & {
    icon?: React.ElementType<SvgIconProps>;
    title?: string;
    description?: string;
};

function ItemAmenties(props: ItemAmentiesBlockProps) {
    const {icon: Icon, title, description, ...other} = props;

    return (
        <Grid container alignItems="center"
              style={{paddingTop: '10px'}}
        >
            <Grid item xs={10}>
                <Grid container alignItems="center">
                    <Grid item xs={12}>
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
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
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
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ItemAmenties;
