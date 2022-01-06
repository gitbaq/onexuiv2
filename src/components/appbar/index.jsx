import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import PermDataSettingRoundedIcon from '@material-ui/icons/PermDataSettingRounded';
import MoneyIcon from '@material-ui/icons/Money';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Tooltip from '@material-ui/core/Tooltip';
import GetAppIcon from '@material-ui/icons/GetApp';

import './appbar.css'
import oneXLogo from '../../assets/OneX.jpeg'
import Header from "../header";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',

        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        opacity: 0.9,
        // backgroundColor: alpha(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',

        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const PrimarySearchAppBar = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);





    const handleMenuClose = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );



    return (
        <div className={classes.grow}>
            <AppBar position="sticky">
                <Toolbar>
                    <div><img alt='OneX logo' src={oneXLogo} className="logo" /></div>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>


                        <Tooltip title="Home">

                            <IconButton aria-label="Home" color="inherit" onClick={() => handleButtonClick("/landing")}>
                                <HomeRoundedIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Contract">
                            <IconButton aria-label="View Landing" color="inherit" onClick={() => handleButtonClick("/contract")}>
                                <DescriptionIcon />
                            </IconButton></Tooltip>

                        <Tooltip title="Account">

                            <IconButton aria-label="Account" color="inherit" onClick={() => handleButtonClick("/account")}>
                                <PermDataSettingRoundedIcon />

                            </IconButton></Tooltip>
                        <Tooltip title="Calculator">

                            <IconButton aria-label="Calculator" color="inherit" onClick={() => handleButtonClick("/calculator")}>
                                <MoneyIcon />
                            </IconButton></Tooltip>
                        <Tooltip title="How to Buy">

                            <IconButton aria-label="How to Buy" color="inherit" onClick={() => handleButtonClick("/howtobuy")}>
                                <ShoppingCartRoundedIcon />
                            </IconButton></Tooltip>
                        <Tooltip title="Faucet">

                            <IconButton aria-label="Faucet" color="inherit" onClick={() => handleButtonClick("/faucet")}>
                                <GetAppIcon />
                            </IconButton>
                        </Tooltip>

                        <Header />
                    </div>

                </Toolbar>
            </AppBar>

            {renderMenu}
        </div>
    );
}

export default withRouter(PrimarySearchAppBar);
