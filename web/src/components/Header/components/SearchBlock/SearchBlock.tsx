import React from 'react';
import {createStyles, Theme} from '@material-ui/core/styles';
import Grid, {GridSpacing} from '@material-ui/core/Grid';
import SelectBlock from "./blocks/SelectBlock";
import DollarSign from "./icons/DollarSign";
import Layers from "./icons/Layers";
import MapPin from "./icons/MapPin";
import Button from "@material-ui/core/Button";
import SelectInputBlock from "./blocks/SearchInput/SelectInputBlock";

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
    });

const optionsList = [
    {
        value: 'Любой бюджет',
    },
    {
        value: 'Любой бюджет',
    },
    {
        value: 'Любой бюджет',
    },
    {
        value: 'Любой бюджет',
    },
    {
        value: 'Любой бюджет',
    },
];

const servicesList = [
    {
        value: 'Все услуги',
    },
    {
        value: 'Все услуги',
    },
    {
        value: 'Все услуги',
    },
    {
        value: 'Все услуги',
    },
    {
        value: 'Все услуги',
    },
];

const mapList = [
    {
        value: 'Весь мир',
    },
    {
        value: 'Весь мир',
    },
    {
        value: 'Весь мир',
    },
    {
        value: 'Весь мир',
    },
]


function SearchBlock() {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
    // };

    return (
        // <Formik
        //     initialValues={{service: "", budget: "", location: "", query: ""}}
        //     onSubmit={async (values) => {
        //         const {error} = await searchServices({input: values});
        //         console.log(error)
        //         if (!error) {
        //             router.push("/");
        //         }
        //         console.log(values)
        //     }}
        // >
        //     {({isSubmitting}) => (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing} alignContent="center" alignItems="center">
                    <Grid item>
                        <SelectInputBlock icon={Layers}/>
                    </Grid>
                    <Grid item style={{width: '175px'}}>
                        <SelectBlock icon={Layers} listOptions={servicesList}/>
                    </Grid>
                    <Grid item style={{width: '208px'}}>
                        <SelectBlock icon={DollarSign} listOptions={optionsList}/>
                    </Grid>
                    <Grid
                        item
                        style={{width: '170px'}}
                    >
                        <SelectBlock icon={MapPin} listOptions={mapList}/>
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                color: 'white',
                                background: '#FF6231',
                                textTransform: 'capitalize',
                                padding: '6px',
                                width: '144px'
                            }}
                            onClick={() => {
                                // isSubmitting
                                console.log('test')
                            }}
                        >
                            Peekslight!
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
// </Form>
// )}
// </Formik>
    );
}

export default SearchBlock;
