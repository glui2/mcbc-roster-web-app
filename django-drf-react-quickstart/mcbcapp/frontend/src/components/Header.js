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
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
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
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
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
              icon: "/static/assets/icons/HomeIcon.png"
            },
            {
              label: "PROFILE",
              icon: "/static/assets/icons/ProfileIcon.png"
            },
            {
              label: "AVAILABILITIES",
              icon: "/static/assets/icons/AvailabilitiesIcon.png"
            },
            {
              label: "MONTHLY ROSTER",
              icon: "/static/assets/icons/MonthlyRosterIcon.png"
            },
            {
              label: "MEMBERS",
              icon: "/static/assets/icons/MembersIcon.png"
            }
          ].map((button, index) => (
            <ListItem
              button
              key={button.label}
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
          ))}
        </List>
      </Drawer>
    </div>
  );
}
