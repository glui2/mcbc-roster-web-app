import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const drawerWidth = 250;
const drawerIconWidth = 28;
const drawerIconMargin = 16;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logoutButton: {
    marginLeft: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [logoutOpen, setLogoutOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleClickOpen = () => {
    setLogoutOpen(true);
  };

  const handleClose = () => {
    setLogoutOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
          padding: "0px",
          backgroundColor: "#FFFFFF",
          color: "#E53232"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
          <IconButton
            edge="end"
            className={classes.logoutButton}
            color="inherit"
            aria-label="menu"
            label="Log Out"
            onClick={handleClickOpen}
          >
            <Typography variant="subtitle1" className={classes.title}>
              Log Out
            </Typography>
            <img
              src="/static/assets/icons/logOutIcon.png"
              style={{
                width: "25px",
                height: "25px",
                marginLeft: "15px"
              }}
            />
          </IconButton>
          <Dialog
            open={logoutOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"LOG OUT?"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Yes
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                No
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List
          style={{
            margin: "5%"
          }}
        >
          {[
            {
              label: "HOME",
              icon: "/static/assets/icons/HomeIcon.png",
              to: ""
            },
            {
              label: "PROFILE",
              icon: "/static/assets/icons/ProfileIcon.png",
              to: "/profile"
            },
            {
              label: "AVAILABILITIES",
              icon: "/static/assets/icons/AvailabilitiesIcon.png",
              to: ""
            },
            {
              label: "MONTHLY ROSTER",
              icon: "/static/assets/icons/MonthlyRosterIcon.png",
              to: ""
            },
            {
              label: "MEMBERS",
              icon: "/static/assets/icons/MembersIcon.png",
              to: ""
            }
          ].map((button, index) => (
            <Link
              to="/profile"
              style={{
                textDecoration: "none"
              }}
            >
              <ListItem
                button
                key={button.label}
                onClick={handleDrawerClose}
                style={{
                  border: "solid",
                  borderColor: "#E53232",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  color: "#E53232",
                  marginBottom: "3%"
                }}
              >
                <img
                  src={button.icon}
                  style={{
                    width: drawerIconWidth,
                    marginLeft: drawerIconMargin / 2,
                    marginRight: drawerIconMargin
                  }}
                />
                <ListItemText primary={button.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
