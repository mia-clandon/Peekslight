import React from 'react';
import {createStyles, Theme} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CardEmployerOrService from "../Cards/CardEmployerOrService/CardEmployerOrService";

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            backgroundColor: 'transparent',
            // background:
            //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    });


const tileData = [
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "./img/apartment.jpg",
        title: 'Image',
        author: 'author',
    },

];
export default function HorizontalScroll() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.2} cellHeight={197}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} className={classes.itemSize}>
                        <CardEmployerOrService/>
                        <GridListTileBar
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
