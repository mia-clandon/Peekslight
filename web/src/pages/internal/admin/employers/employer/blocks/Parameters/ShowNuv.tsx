import React from 'react';
import Grid from "@material-ui/core/Grid";
import HeaderBlock from "../../../../../../../components/HeaderBlock/HeaderBlock";
import {Layout} from "../../../../../../../components/Layout";
import {useGetParametersEmployerFromUrl} from "../../../../../../../utils/useGetParametersEmployerFromUrl";
import Item from "./block/Item";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/core/Rating";
import StarIcon from "@material-ui/icons/Star";

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

function ShowParameters({props}: { props?: any }) {
    const [{data, error, fetching}] = useGetParametersEmployerFromUrl();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    console.log(value);

    console.log(data)

    if (fetching) {
        return (
            <Layout>
                <div>loading...</div>
            </Layout>
        );
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Grid container spacing={2} style={{
                    border: '1px solid #F0EEEE',
                    padding: '24px',
                    marginTop: '30px',
                }}
                >
                    <Grid item xs={12}>
                        <HeaderBlock props={"Навыки"}/>
                    </Grid>
                    <Grid item xs={12}>
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
                                Навык
                            </Typography>
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
                        </Grid>
                    </Grid>
                </Grid>
            )
            }
        </>
    )
}

export default ShowParameters;
