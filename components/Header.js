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
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Dashboard from "@material-ui/icons/Dashboard";
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
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ search: "" });
  }

  componentDidMount = () => {
    this.setState({ autoHeightMax: window.innerHeight });
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
        <List style={{ padding: "0px" }}>
          <ListItem
            button
            onClick={(e) => {
              this.setState({ open: true, showProfile: false });
            }}
            style={{
              position: "relative",
              padding: "32px 32px 12px",
              marginBottom: "8px",
            }}
          >
            <ListItemAvatar>
              <div>
                <img
                  alt="memorang"
                  width="56"
                  height="56"
                  className="jss87"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTMuMTY3IDE0OCkiPjxnPjxkZWZzPjxwYXRoIGQ9Ik0gMzYzLjUgMCBDIDQ5OC45NDYgLTAgNzI2LjkzNSA0MjkuMzQ2IDcyNyA1MTMuNTkgQyA3MjcuMDY1IDU5Ny44MzUgNDkzLjg1IDMzNi45NzcgMzcxLjIyMSAzMzYuOTc3IEMgMjQ4LjU5MiAzMzYuOTc3IDAuMDY1IDYwOS4wNjEgMCA1MjQuODE2IEMgLTAuMDY1IDQ0MC41NzIgMjI4LjA1NCAwIDM2My41IDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzIDkzKSByb3RhdGUoOTAgMzYzLjUgMjcwLjUpIiBpZD0iYTEwMDB6Ij48L3BhdGg+PGZpbHRlciBpZD0iYTEwMDJ6IiB4PSItMC43JSIgeT0iLTEuMyUiIHdpZHRoPSIxMDEuNCUiIGhlaWdodD0iMTAyLjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImExMDA0eiI+PC9mZUdhdXNzaWFuQmx1cj48ZmVPZmZzZXQgZHg9IjAiIGR5PSIyIiBpbj0iYTEwMDR6IiByZXN1bHQ9ImExMDA1eiI+PC9mZU9mZnNldD48ZmVDb21wb3NpdGUgaW49ImExMDA1eiIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiIHJlc3VsdD0iYTEwMDZ6Ij48L2ZlQ29tcG9zaXRlPjxmZUNvbG9yTWF0cml4IGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjUgMCIgdHlwZT0ibWF0cml4IiBpbj0iYTEwMDZ6IiByZXN1bHQ9ImExMDA3eiI+PC9mZUNvbG9yTWF0cml4PjwvZmlsdGVyPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhMTAwMHoiIGZpbGw9InJnYmEoMzQsIDE3MCwgMTUzLCAwLjE1KSIgY2xpcC1wYXRoPSJ1cmwoI2ExMDAxeikiPjwvdXNlPjx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ExMDAyeikiIHhsaW5rOmhyZWY9IiNhMTAwMHoiPjwvdXNlPjwvZz48Zz48ZGVmcz48cGF0aCBkPSJNIDM2My41IDAgQyA0OTguOTQ2IC0wIDcyNi45MzUgNDI5LjM0NiA3MjcgNTEzLjU5IEMgNzI3LjA2NSA1OTcuODM1IDQ5My44NSAzMzYuOTc3IDM3MS4yMjEgMzM2Ljk3NyBDIDI0OC41OTIgMzM2Ljk3NyAwLjA2NSA2MDkuMDYxIDAgNTI0LjgxNiBDIC0wLjA2NSA0NDAuNTcyIDIyOC4wNTQgMCAzNjMuNSAwIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00My4xNjYgOTQpIHJvdGF0ZSg5MCAzNjMuNSAyNzAuNSkiIGlkPSJhMTAwOHoiPjwvcGF0aD48ZmlsdGVyIGlkPSJhMTAxMHoiIHg9Ii0wLjclIiB5PSItMS4zJSIgd2lkdGg9IjEwMS40JSIgaGVpZ2h0PSIxMDIuNiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iYTEwMTJ6Ij48L2ZlR2F1c3NpYW5CbHVyPjxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJhMTAxMnoiIHJlc3VsdD0iYTEwMTN6Ij48L2ZlT2Zmc2V0PjxmZUNvbXBvc2l0ZSBpbj0iYTEwMTN6IiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJhMTAxNHoiPjwvZmVDb21wb3NpdGU+PGZlQ29sb3JNYXRyaXggY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJhMTAxNHoiIHJlc3VsdD0iYTEwMTV6Ij48L2ZlQ29sb3JNYXRyaXg+PC9maWx0ZXI+PC9kZWZzPjx1c2UgeGxpbms6aHJlZj0iI2ExMDA4eiIgZmlsbD0icmdiYSgzNCwgMTcwLCAxNTMsIDAuNCkiIGNsaXAtcGF0aD0idXJsKCNhMTAwOXopIj48L3VzZT48dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNhMTAxMHopIiB4bGluazpocmVmPSIjYTEwMDh6Ij48L3VzZT48L2c+PGc+PGRlZnM+PHBhdGggZD0iTSAzNjMuNSAwIEMgNDk4Ljk0NiAtMCA3MjYuOTM1IDQyOS4zNDYgNzI3IDUxMy41OSBDIDcyNy4wNjUgNTk3LjgzNSA0OTMuODUgMzM2Ljk3NyAzNzEuMjIxIDMzNi45NzcgQyAyNDguNTkyIDMzNi45NzcgMC4wNjUgNjA5LjA2MSAwIDUyNC44MTYgQyAtMC4wNjUgNDQwLjU3MiAyMjguMDU0IDAgMzYzLjUgMCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjgzMyA5NCkgcm90YXRlKDkwIDM2My41IDI3MC41KSIgaWQ9ImExMDE2eiI+PC9wYXRoPjxmaWx0ZXIgaWQ9ImExMDE4eiIgeD0iLTAuNyUiIHk9Ii0xLjMlIiB3aWR0aD0iMTAxLjQlIiBoZWlnaHQ9IjEwMi42JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyLjUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJhMTAyMHoiPjwvZmVHYXVzc2lhbkJsdXI+PGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49ImExMDIweiIgcmVzdWx0PSJhMTAyMXoiPjwvZmVPZmZzZXQ+PGZlQ29tcG9zaXRlIGluPSJhMTAyMXoiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIiByZXN1bHQ9ImExMDIyeiI+PC9mZUNvbXBvc2l0ZT48ZmVDb2xvck1hdHJpeCBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjI1IDAiIHR5cGU9Im1hdHJpeCIgaW49ImExMDIyeiIgcmVzdWx0PSJhMTAyM3oiPjwvZmVDb2xvck1hdHJpeD48L2ZpbHRlcj48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYTEwMTZ6IiBmaWxsPSIjMjJBQTk5IiBjbGlwLXBhdGg9InVybCgjYTEwMTd6KSI+PC91c2U+PHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjYTEwMTh6KSIgeGxpbms6aHJlZj0iI2ExMDE2eiI+PC91c2U+PC9nPjxwYXRoIGQ9Ik0gNTY3LjA0MSAzNjMuNTE3IEMgNTY3LjA0MSAzOTkuMTczIDUzOC4xNDEgNDI4LjA3NyA1MDIuNDkyIDQyOC4wNzcgQyA0NjYuODQyIDQyOC4wNzcgNDM3Ljk0MiAzOTkuMTczIDQzNy45NDIgMzYzLjUxNyBDIDQzNy45NDIgMzI3Ljg2MiA0NjYuODQyIDI5OC45NTggNTAyLjQ5MiAyOTguOTU4IEMgNTM4LjE0MSAyOTguOTU4IDU2Ny4wNDEgMzI3Ljg2MiA1NjcuMDQxIDM2My41MTcgWiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlPSIjRkZGRkZGIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE4Ljk3NCAyNzMpIHJvdGF0ZSg5MCAxODUuNTIzIDk3Ljk5NCkiPjxnPjxwYXRoIGQ9Ik0gNDIuMTA0IDExMS43OTQgQyA2NS4zNTggMTExLjc5NCA4NC4yMDggMTMwLjY0MSA4NC4yMDggMTUzLjg5MSBDIDg0LjIwOCAxNzcuMTQxIDY1LjM1OCAxOTUuOTg5IDQyLjEwNCAxOTUuOTg5IEMgMTguODUxIDE5NS45ODkgMCAxNzcuMTQxIDAgMTUzLjg5MSBDIDAgMTMwLjY0MSAxOC44NTEgMTExLjc5NCA0Mi4xMDQgMTExLjc5NCBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDAgMCBDIDM1LjY1NSAwIDY0LjU2IDI4LjkgNjQuNTYgNjQuNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3LjkxIDgzLjEzKSByb3RhdGUoLTIgMzIuMjggMzIuMjc1KSIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTEuMDQ2IDEwMyBMIDE4Ni4wNDYgMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NiAwKSI+PHBhdGggZD0iTSAxNDIuOTQyIDExMS43OTQgQyAxMTkuNjg5IDExMS43OTQgMTAwLjgzOCAxMzAuNjQxIDEwMC44MzggMTUzLjg5MSBDIDEwMC44MzggMTc3LjE0MSAxMTkuNjg5IDE5NS45ODkgMTQyLjk0MiAxOTUuOTg5IEMgMTY2LjE5NiAxOTUuOTg5IDE4NS4wNDYgMTc3LjE0MSAxODUuMDQ2IDE1My44OTEgQyAxODUuMDQ2IDEzMC42NDEgMTY2LjE5NiAxMTEuNzk0IDE0Mi45NDIgMTExLjc5NCBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDY4LjkwNSAwLjE2IEMgMzMuMzM3IC0yLjMyNyAyLjQ4NyAyNC40ODYgMCA2MC4wNDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjQwMSA4NS4zKSByb3RhdGUoLTIgMzQuNDUzIDMwLjAyNCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDk1IDEwMyBMIDAgMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                />
                <span className={classes.logoText}>memorang</span>
              </div>
            </ListItemAvatar>
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
          <img
            alt="memorang"
            width="56"
            height="56"
            className="jss87"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTMuMTY3IDE0OCkiPjxnPjxkZWZzPjxwYXRoIGQ9Ik0gMzYzLjUgMCBDIDQ5OC45NDYgLTAgNzI2LjkzNSA0MjkuMzQ2IDcyNyA1MTMuNTkgQyA3MjcuMDY1IDU5Ny44MzUgNDkzLjg1IDMzNi45NzcgMzcxLjIyMSAzMzYuOTc3IEMgMjQ4LjU5MiAzMzYuOTc3IDAuMDY1IDYwOS4wNjEgMCA1MjQuODE2IEMgLTAuMDY1IDQ0MC41NzIgMjI4LjA1NCAwIDM2My41IDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzIDkzKSByb3RhdGUoOTAgMzYzLjUgMjcwLjUpIiBpZD0iYTEwMDB6Ij48L3BhdGg+PGZpbHRlciBpZD0iYTEwMDJ6IiB4PSItMC43JSIgeT0iLTEuMyUiIHdpZHRoPSIxMDEuNCUiIGhlaWdodD0iMTAyLjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImExMDA0eiI+PC9mZUdhdXNzaWFuQmx1cj48ZmVPZmZzZXQgZHg9IjAiIGR5PSIyIiBpbj0iYTEwMDR6IiByZXN1bHQ9ImExMDA1eiI+PC9mZU9mZnNldD48ZmVDb21wb3NpdGUgaW49ImExMDA1eiIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiIHJlc3VsdD0iYTEwMDZ6Ij48L2ZlQ29tcG9zaXRlPjxmZUNvbG9yTWF0cml4IGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjUgMCIgdHlwZT0ibWF0cml4IiBpbj0iYTEwMDZ6IiByZXN1bHQ9ImExMDA3eiI+PC9mZUNvbG9yTWF0cml4PjwvZmlsdGVyPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhMTAwMHoiIGZpbGw9InJnYmEoMzQsIDE3MCwgMTUzLCAwLjE1KSIgY2xpcC1wYXRoPSJ1cmwoI2ExMDAxeikiPjwvdXNlPjx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ExMDAyeikiIHhsaW5rOmhyZWY9IiNhMTAwMHoiPjwvdXNlPjwvZz48Zz48ZGVmcz48cGF0aCBkPSJNIDM2My41IDAgQyA0OTguOTQ2IC0wIDcyNi45MzUgNDI5LjM0NiA3MjcgNTEzLjU5IEMgNzI3LjA2NSA1OTcuODM1IDQ5My44NSAzMzYuOTc3IDM3MS4yMjEgMzM2Ljk3NyBDIDI0OC41OTIgMzM2Ljk3NyAwLjA2NSA2MDkuMDYxIDAgNTI0LjgxNiBDIC0wLjA2NSA0NDAuNTcyIDIyOC4wNTQgMCAzNjMuNSAwIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00My4xNjYgOTQpIHJvdGF0ZSg5MCAzNjMuNSAyNzAuNSkiIGlkPSJhMTAwOHoiPjwvcGF0aD48ZmlsdGVyIGlkPSJhMTAxMHoiIHg9Ii0wLjclIiB5PSItMS4zJSIgd2lkdGg9IjEwMS40JSIgaGVpZ2h0PSIxMDIuNiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iYTEwMTJ6Ij48L2ZlR2F1c3NpYW5CbHVyPjxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJhMTAxMnoiIHJlc3VsdD0iYTEwMTN6Ij48L2ZlT2Zmc2V0PjxmZUNvbXBvc2l0ZSBpbj0iYTEwMTN6IiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJhMTAxNHoiPjwvZmVDb21wb3NpdGU+PGZlQ29sb3JNYXRyaXggY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJhMTAxNHoiIHJlc3VsdD0iYTEwMTV6Ij48L2ZlQ29sb3JNYXRyaXg+PC9maWx0ZXI+PC9kZWZzPjx1c2UgeGxpbms6aHJlZj0iI2ExMDA4eiIgZmlsbD0icmdiYSgzNCwgMTcwLCAxNTMsIDAuNCkiIGNsaXAtcGF0aD0idXJsKCNhMTAwOXopIj48L3VzZT48dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNhMTAxMHopIiB4bGluazpocmVmPSIjYTEwMDh6Ij48L3VzZT48L2c+PGc+PGRlZnM+PHBhdGggZD0iTSAzNjMuNSAwIEMgNDk4Ljk0NiAtMCA3MjYuOTM1IDQyOS4zNDYgNzI3IDUxMy41OSBDIDcyNy4wNjUgNTk3LjgzNSA0OTMuODUgMzM2Ljk3NyAzNzEuMjIxIDMzNi45NzcgQyAyNDguNTkyIDMzNi45NzcgMC4wNjUgNjA5LjA2MSAwIDUyNC44MTYgQyAtMC4wNjUgNDQwLjU3MiAyMjguMDU0IDAgMzYzLjUgMCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjgzMyA5NCkgcm90YXRlKDkwIDM2My41IDI3MC41KSIgaWQ9ImExMDE2eiI+PC9wYXRoPjxmaWx0ZXIgaWQ9ImExMDE4eiIgeD0iLTAuNyUiIHk9Ii0xLjMlIiB3aWR0aD0iMTAxLjQlIiBoZWlnaHQ9IjEwMi42JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyLjUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJhMTAyMHoiPjwvZmVHYXVzc2lhbkJsdXI+PGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49ImExMDIweiIgcmVzdWx0PSJhMTAyMXoiPjwvZmVPZmZzZXQ+PGZlQ29tcG9zaXRlIGluPSJhMTAyMXoiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIiByZXN1bHQ9ImExMDIyeiI+PC9mZUNvbXBvc2l0ZT48ZmVDb2xvck1hdHJpeCBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjI1IDAiIHR5cGU9Im1hdHJpeCIgaW49ImExMDIyeiIgcmVzdWx0PSJhMTAyM3oiPjwvZmVDb2xvck1hdHJpeD48L2ZpbHRlcj48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYTEwMTZ6IiBmaWxsPSIjMjJBQTk5IiBjbGlwLXBhdGg9InVybCgjYTEwMTd6KSI+PC91c2U+PHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjYTEwMTh6KSIgeGxpbms6aHJlZj0iI2ExMDE2eiI+PC91c2U+PC9nPjxwYXRoIGQ9Ik0gNTY3LjA0MSAzNjMuNTE3IEMgNTY3LjA0MSAzOTkuMTczIDUzOC4xNDEgNDI4LjA3NyA1MDIuNDkyIDQyOC4wNzcgQyA0NjYuODQyIDQyOC4wNzcgNDM3Ljk0MiAzOTkuMTczIDQzNy45NDIgMzYzLjUxNyBDIDQzNy45NDIgMzI3Ljg2MiA0NjYuODQyIDI5OC45NTggNTAyLjQ5MiAyOTguOTU4IEMgNTM4LjE0MSAyOTguOTU4IDU2Ny4wNDEgMzI3Ljg2MiA1NjcuMDQxIDM2My41MTcgWiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlPSIjRkZGRkZGIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE4Ljk3NCAyNzMpIHJvdGF0ZSg5MCAxODUuNTIzIDk3Ljk5NCkiPjxnPjxwYXRoIGQ9Ik0gNDIuMTA0IDExMS43OTQgQyA2NS4zNTggMTExLjc5NCA4NC4yMDggMTMwLjY0MSA4NC4yMDggMTUzLjg5MSBDIDg0LjIwOCAxNzcuMTQxIDY1LjM1OCAxOTUuOTg5IDQyLjEwNCAxOTUuOTg5IEMgMTguODUxIDE5NS45ODkgMCAxNzcuMTQxIDAgMTUzLjg5MSBDIDAgMTMwLjY0MSAxOC44NTEgMTExLjc5NCA0Mi4xMDQgMTExLjc5NCBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDAgMCBDIDM1LjY1NSAwIDY0LjU2IDI4LjkgNjQuNTYgNjQuNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3LjkxIDgzLjEzKSByb3RhdGUoLTIgMzIuMjggMzIuMjc1KSIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTEuMDQ2IDEwMyBMIDE4Ni4wNDYgMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NiAwKSI+PHBhdGggZD0iTSAxNDIuOTQyIDExMS43OTQgQyAxMTkuNjg5IDExMS43OTQgMTAwLjgzOCAxMzAuNjQxIDEwMC44MzggMTUzLjg5MSBDIDEwMC44MzggMTc3LjE0MSAxMTkuNjg5IDE5NS45ODkgMTQyLjk0MiAxOTUuOTg5IEMgMTY2LjE5NiAxOTUuOTg5IDE4NS4wNDYgMTc3LjE0MSAxODUuMDQ2IDE1My44OTEgQyAxODUuMDQ2IDEzMC42NDEgMTY2LjE5NiAxMTEuNzk0IDE0Mi45NDIgMTExLjc5NCBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDY4LjkwNSAwLjE2IEMgMzMuMzM3IC0yLjMyNyAyLjQ4NyAyNC40ODYgMCA2MC4wNDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjQwMSA4NS4zKSByb3RhdGUoLTIgMzQuNDUzIDMwLjAyNCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2U9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBkPSJNIDk1IDEwMyBMIDAgMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZT0iI0ZGRkZGRiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
          />
          <span
            style={{
              position: "absolute",
              paddingTop: "15px",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: "500",
              fontSize: "1.3125rem",
              lineHeight: "1.66667rem",
            }}
          >
            memorang
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
