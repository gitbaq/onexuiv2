import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import PermDataSettingRoundedIcon from '@material-ui/icons/PermDataSettingRounded';
import MoneyIcon from '@material-ui/icons/Money';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Tooltip from '@material-ui/core/Tooltip';
import GetAppIcon from '@material-ui/icons/GetApp';
import SwapHorizontalCircleRoundedIcon from '@material-ui/icons/SwapHorizontalCircleRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import GroupIcon from '@material-ui/icons/Group';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import SwapHorizRoundedIcon from '@material-ui/icons/SwapHorizRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';

import './appbar.css'
import oneXLogo from '../../assets/v3_white_nocircle.svg'
import Header from "../header";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    columns: {
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: "right",
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    rows: {
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-around",
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
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

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
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
    }, toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
}));

const PrimarySearchAppBar = props => {
    const { history } = props;
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    // const handleMenuClose = pageURL => {
    //     history.push(pageURL);
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };


    // const handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    // };

    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );



    return (
        <div className={classes.grow}>
            <AppBar position="sticky" style={{ background: 'linear-gradient(30deg,rgba(17, 131, 161, 1.0)20%, rgba(69, 214, 202,0.1)50%, rgba(40,185,216, 0.1) 60%,  rgba(86,234,190, 0.1)100%)' }}>
                <Toolbar className={classes.toolbar}>
                    <div><img alt='OneX logo' src={oneXLogo} className="logo" /></div>

                    {/* <Tooltip title="Calculator">
                        <IconButton aria-label="Calculator" variant="contained" color="inherit" onClick={() => handleButtonClick("/calculator")}>
                            <MoneyIcon />
                            <div className="appBarLabel">Calculator</div>
                        </IconButton>
                    </Tooltip> */}
                    <Tooltip title="BBH Swap">
                        <IconButton aria-label="BBH Swap" color="inherit" onClick={() => handleButtonClick("/swap")}>
                            <SwapHorizontalCircleRoundedIcon />
                            <div className="appBarLabel">BBH Swap</div>

                        </IconButton>
                    </Tooltip>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        {/* <Grid container className={`${classes.columns}`} spacing={1} >

                            <Grid item xs={12} sm={2} >
                                <Box className={`${classes.columns}`}>
                                    
                                </Box>
                            </Grid>
                        </Grid> */}

                        <Tooltip title="Home">
                            <IconButton aria-label="Home" color="inherit" onClick={() => handleButtonClick("/home")}>
                                <HomeRoundedIcon />
                                {/* <div className="appBarLabel">About</div> */}
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Whitepaper">
                            <IconButton aria-label="Whitepaper" color="inherit" onClick={() => handleButtonClick("/whitepaper")}>
                                <AssignmentRoundedIcon />
                                {/* <div className="appBarLabel">Whitepaper</div> */}
                            </IconButton></Tooltip>


                        <Tooltip title="Frequently Asked Questions">
                            <IconButton aria-label="FAQ" color="inherit" onClick={() => handleButtonClick("/faq")}>
                                <ContactSupportRoundedIcon />
                                {/* <div className="appBarLabel">FAQ</div> */}

                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Team">
                            <IconButton aria-label="Team" color="inherit" onClick={() => handleButtonClick("/team")}>
                                <GroupIcon />
                                {/* <div className="appBarLabel">Team</div> */}

                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Roadmap">
                            <IconButton aria-label="Roadmap" color="inherit" onClick={() => handleButtonClick("/roadmap")}>
                                <MapRoundedIcon />
                                {/* <div className="appBarLabel">Roadmap</div> */}

                            </IconButton>
                        </Tooltip>


                        <Divider orientation="vertical" flexItem />

                        <Tooltip title="Test Contract">
                            <IconButton aria-label="Account" color="inherit" onClick={() => handleButtonClick("/testcontract")}>
                                <PermDataSettingRoundedIcon />
                                <div className="appBarLabel">Contract</div>

                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Verify Contract">
                            <IconButton aria-label="Account" color="inherit" onClick={() => handleButtonClick("/verifycontract")}>
                                <DoneAllRoundedIcon />
                                <div className="appBarLabel">Verify Contract</div>

                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Faucet">
                            <IconButton aria-label="Faucet" color="inherit" onClick={() => handleButtonClick("/faucet")}>
                                <GetAppIcon />
                                <div className="appBarLabel">Faucet</div>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Token Swap">
                            <IconButton aria-label="Token Swap" color="inherit" onClick={() => handleButtonClick("/tokenswap")}>
                                <SwapHorizRoundedIcon />
                                <div className="appBarLabel">Token Swap</div>

                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Rewards">
                            <IconButton aria-label="Rewards" color="inherit" onClick={() => handleButtonClick("/rewards")}>
                                <AttachMoneyRoundedIcon />
                                <div className="appBarLabel">Rewards</div>

                            </IconButton>
                        </Tooltip>
                        <Divider orientation="vertical" flexItem />
                    </div>&nbsp;&nbsp;
                    <Header />

                </Toolbar>
            </AppBar>
            {/* {renderMenu} */}
        </div>
    );
}

export default withRouter(PrimarySearchAppBar);
