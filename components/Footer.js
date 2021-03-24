import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  footer: {
    textAlign: "center",
    width: "100%",
    height: "110px",
    color: "#a2a2a2",
    position: "fixed",
    bottom: 0,
    display: "contents",
  },
  fMenu: {
    display: "block",
    width: "100%",
    paddingLeft: "0",
    listStyle: "none",
    marginTop: "8px",
    "& li": {
      display: "inline-block",
      paddingLeft: "5px",
      paddingRight: "5px",
      "& a": {
        color: "#a2a2a2",
        textDecoration: "none",
        "&:hover": {
          color: "#777",
        },
      },
    },
  },
});

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "web",
      showRemoveContent: false,
    };
  }

  componentDidMount = () => {};

  closeModel = () => {
    this.setState({ showRemoveContent: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <footer
        className={classes.footer}
        style={{ clear: "both", float: "left" }}
      >
        <div style={{ paddingTop: "35px", fontSize: "14px" }}>
          Copyright &copy; 2021 Memorang
          <ul className={classes.fMenu}>
            <li>
              <a href="/" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="/favorites" target="_blank">
                Favorites
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
