import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import itemData from './itemData';
import logo from '../../assets/OneX.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        // height: '400px'

    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: "100%",
        // minHeight: '100vh'
    },
    imageListItem: {
        minHeight: '300px'
    },
    title: {
        // color: theme.palette.primary.dark,
        color: "#333333",
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(13,193,215,0.8) 30%, rgba(13,193,215,0.6) 70%, rgba(13,193,215,1) 100%)',
        fontWeight: 'bold'
    },

}));


export default function SingleLineImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={1}>
                {itemData.map((item) => (
                    <ImageListItem key={item.id} classes={{
                        root: classes.imageListItem,
                    }}>
                        {/* <img alt={item.title} src={require(item.img)} alt="Test" /> */}
                        <img src={item.img} alt={item.title} height="100%" width="100%" />
                        <ImageListItemBar
                            title={item.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
