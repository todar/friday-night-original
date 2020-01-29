import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

function SearchNavbar({ filter, setFilter, onClose }) {
  const classes = useStyles();
  return (
    <AppBar color="primary">
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Toolbar>
          <div className={classes.search}>
            <InputBase
              value={filter}
              onChange={e => setFilter(e.target.value)}
              autoFocus={true}
              placeholder="Search (Not setup yet!)"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              startAdornment={
                <IconButton color="primary" onClick={onClose}>
                  <ArrowBackIcon />
                </IconButton>
              }
              endAdornment={
                <IconButton edge="end">
                  <CloseIcon />
                </IconButton>
              }
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </Slide>
    </AppBar>
  );
}

export default SearchNavbar;
