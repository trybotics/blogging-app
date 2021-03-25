import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Snackbar from "@material-ui/core/Snackbar";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/core/styles/withStyles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import CloseIcon from "@material-ui/icons/Close";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsIcon from "@material-ui/icons/Settings";
import RestoreIcon from "@material-ui/icons/Restore";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Dashboard from "@material-ui/icons/Dashboard";
import People from "@material-ui/icons/People";
import Favorite from "@material-ui/icons/Favorite";
import { List } from "@material-ui/core";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Link from "next/link";

const styles = (theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 30,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing() * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing() * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 160,
      "&:focus": {
        width: 200,
      },
    },
    grow: {
      flexGrow: 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  LogoIcon: {
    fontSize: "30px",
    marginLeft: "-5px",
    marginRight: "-7px",
  },
  logoText: {
    position: "absolute",
    paddingTop: "15px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "500",
    fontSize: "1.3125rem",
    lineHeight: "1.66667rem",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    width: 280,
  },
  headerMenuIcon: {
    top: "0px",
    zIndex: "1110 !important",
    position: "fixed !important",
    margin: "6px !important",
  },
  blinking: {
    color: "#2196F3",
    animation: `$blinkingText 1.2s infinite`,
  },
  "@keyframes blinkingText": {
    "0%": { color: "#2196F3" },
    "49%": { color: "#2196F3" },
    "60%": { color: "transparent" },
    "99%": { color: "transparent" },
    "100%": { color: "#2196F3" },
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1100,
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElProfileMenu: null,
      anchorElCardMenu: null,
      anchorElShareMenu: null,
      open: false,
      showContactUs: false,
      showProfile: false,
      showPost: false,
      search: "",
      openWorkshop: false,
      left: false,
      autoHeightMax: 1000,
      openWebShare: false,
      showRemoveContent: false,
      userName: "User",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ search: "" });
  }

  componentDidMount = () => {
    this.setState({
      autoHeightMax: window.innerHeight,
      userName: localStorage.getItem(
        "CognitoIdentityServiceProvider.11jck81hehtgj7ufu892uh203p.LastAuthUser"
      ),
    });
    // setTimeout(() => {
    //   if (!this.state.open && !this.props.user.isLogin) {
    //     this.setState({ open: true });
    //   }
    // }, 30000)
    // Device.getInfo().then(info => {
    //   console.log(info);
    //   this.setState({ platform: info.platform })
    // }).catch(error => {
    //   console.log(error);
    // })
    document.getElementById("google_translate_element").className =
      "google_translate_element";
  };

  removeElementById = (element) => {
    var element = document.getElementById(element);
    if (element) {
      element.parentNode.removeChild(element);
    }
  };

  handleProfileMenu = (event) => {
    // if (this.props.user.isLogin) {
    //   this.setState({
    //     anchorElProfileMenu: event.currentTarget
    //   });
    // } else {
    //   this.setState({
    //     open: true
    //   });
    // }
    this.setState({
      open: true,
    });
  };
  handleCardMenu = (event) => {
    this.setState({
      anchorElCardMenu: event.currentTarget,
    });
  };

  handleShareMenu = (event) => {
    this.setState({
      anchorElShareMenu: event.currentTarget,
    });
  };

  handleRequestClose = (e, url) => {
    this.setState({
      anchorElProfileMenu: null,
      anchorElCardMenu: null,
      anchorElShareMenu: null,
      openWebShare: false,
    });
  };

  openModel = () => {
    this.setState({ open: true });
  };

  closeModel = () => {
    this.setState({
      open: false,
      showContactUs: false,
      showProfile: false,
      showRemoveContent: false,
    });
  };

  signOut = (e) => {
    localStorage.clear();
    // this.props.logOut();
    this.handleRequestClose(e);
  };

  closePost = () => {
    this.setState({ showPost: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEnter = (event) => {
    if (event.keyCode == 13 && event.shiftKey == false) {
      // if (
      //   this.props.location.pathname == "" ||
      //   this.props.location.pathname == "/" ||
      //   this.props.location.pathname == "/home"
      // ) {
      //   this.props.history.push({
      //     pathname: "project",
      //     search: "?search=" + this.state.search
      //   });
      // } else {
      //   console.log('this.props.location', this.props.location)
      //   if (this.props.location.pathname.split("/").length > 2) {
      //     this.props.location.pathname = "/" + this.props.location.pathname.split("/")[1];
      //   } else {
      //     this.props.history.push({
      //       pathname: this.props.location.pathname.split("/")[1],
      //       search: "?search=" + this.state.search
      //     });
      //   }
      // }
    }
  };
  handleWorkshopClick = () => {
    this.setState({ openWorkshop: !this.state.openWorkshop });
  };
  toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ [side]: open });
  };

  render() {
    // let shareLinkURL = rootURL + this.props.location.pathname
    // let showRemoveContentOption = (this.props.location.pathname && this.props.location.pathname.split('/').length > 0 && ["project", "internship"].includes(this.props.location.pathname.split('/')[1])) ? true : false
    const { classes } = this.props;
    const sideList = (side) => (
      <div
        className={classes.list}
        role="presentation"
        onKeyDown={this.toggleDrawer(side, false)}
      >
        {/* </Scrollbars> */}
        <List style={{ paddingTop: 20 }}>
          <ListItem button onClick={this.toggleDrawer(side, false)}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary={`Hi ${this.state.userName}`} />
          </ListItem>
          <ListItem divider />
          <Link href="/">
            <ListItem button onClick={this.toggleDrawer(side, false)}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/favorites">
            <ListItem button onClick={this.toggleDrawer(side, false)}>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    let profileMenu = (
      <Menu
        style={{ display: "block" }}
        anchorEl={this.state.anchorElProfileMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(this.state.anchorElProfileMenu)}
        onClose={this.handleRequestClose}
      >
        <MenuItem
          onClick={(e) => {
            this.handleRequestClose(e);
            setTimeout(() => {
              this.setState({ showProfile: true });
            });
          }}
        >
          <ListItemIcon>
            <AssignmentIndIcon />{" "}
          </ListItemIcon>
          <ListItemText
            primary={<div style={{ fontSize: "14px" }}>Profile</div>}
          />
        </MenuItem>
        <MenuItem onClick={this.handleRequestClose}>
          <ListItemIcon>
            <SettingsIcon />{" "}
          </ListItemIcon>
          <ListItemText
            primary={<div style={{ fontSize: "14px" }}>Settings</div>}
          />
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            this.signOut(e);
          }}
        >
          <ListItemIcon>
            <RestoreIcon />{" "}
          </ListItemIcon>
          <ListItemText
            primary={<div style={{ fontSize: "14px" }}>Logout</div>}
          />
        </MenuItem>
      </Menu>
    );
    const mobileToolbar = (
      <Toolbar
        style={{
          marginLeft: 12,
          minHeight: 60,
          paddingRight: 5,
          paddingLeft: 5,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={this.toggleDrawer("left", true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>

        <div style={{ flex: 1 }}>
          <span
            style={{
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: "500",
              fontSize: "1.3125rem",
              lineHeight: "1.66667rem",
            }}
          >
            Movie App
          </span>
        </div>

        {/* <Hidden xsDown>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              name="search"
              placeholder="Search by Keyword…"
              value={this.state.search}
              onChange={this.handleChange}
              // onKeyDown={this.handleEnter}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Hidden> */}
        <div id="google_translate_element"></div>
        <IconButton
          style={{
            height: 60,
            width: 60,
            // marginTop: this.props.user.isLogin ? -5 : 0,
            marginLeft: 5,
          }}
          aria-haspopup="true"
          color="inherit"
          aria-label="Profile"
          onClick={this.handleProfileMenu}
        >
          <AmplifySignOut style={{ marginRight: 130 }} type="string" />
          {/* <AccountCircleIcon style={{ fontSize: "30px" }} /> */}
          {/* {this.props.user.isLogin ? (
          <Avatar
            style={{
              border: "3px solid #ffffff",
              borderRadius: "50%",
              width: "35px",
              height: "35px"
            }}
            src={this.props.user.imageUrl}
          />
        ) : (
            <AccountCircleIcon style={{ fontSize: "30px" }} />
          )} */}
        </IconButton>
      </Toolbar>
    );
    return (
      <div>
        <style jsx>
          {`
            amplify-button:host {
              background-color: blue !important;
            }
          `}
        </style>
        {profileMenu}
        <Hidden smUp>
          {/* <HideOnScroll {...this.props}> */}
          <AppBar style={{ boxShadow: "0px 0px 0px 0px" }}>
            {mobileToolbar}
          </AppBar>
          {/* </HideOnScroll> */}
        </Hidden>
        <div className={classes.headerMenuIcon}>
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer("left", false)}
            onOpen={this.toggleDrawer("left", true)}
          >
            {sideList("left")}
          </SwipeableDrawer>
        </div>
        <Hidden smUp>
          <AppBar style={{ zIndex: 1050, boxShadow: "0px 0px 0px 0px" }}>
            <Toolbar style={{ minHeight: "60px" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.toggleDrawer("left", true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              {/* <div
                className={classes.search}
                style={{ marginLeft: "5px", marginRight: "6px" }}
              >
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  name="search"
                  placeholder="Search by Keyword…"
                  value={this.state.search}
                  onChange={this.handleChange}
                  onKeyDown={this.handleEnter}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div> */}
            </Toolbar>
          </AppBar>
        </Hidden>
        <AppBar style={{ zIndex: 1000 }}>{mobileToolbar}</AppBar>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          // open={this.props.snackbar.show}
          autoHideDuration={3000}
          onClose={this.props.closeSnackbar}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">msg</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.props.closeSnackbar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.Home.login.userDetails,
    snackbar: state.projectState.snackbar.show
      ? state.projectState.snackbar
      : state.blogState.snackbar.show
      ? state.blogState.snackbar
      : state.adState.snackbar.show
      ? state.adState.snackbar
      : state.youtubeState.snackbar.show
      ? state.youtubeState.snackbar
      : state.affiliateState.snackbar.show
      ? state.affiliateState.snackbar
      : state.Home.login.snackbar,
  };
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
