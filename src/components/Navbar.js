import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Search from "@material-ui/icons/Search";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import SearchNavbar from "./SearchNavbar";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

import Sidebar from "./Sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 500
  }
}));

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  line-height: 0.1rem;
`;

const MenuButton = styled(IconButton)`
  margin-right: 1rem;
`;

const Title = styled.span`
  flex-grow: 1;
`;

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ threshold: 75 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 75
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function Navbar({ filter, setFilter, showback = false }) {
  const [showSidebar, setShowSidebar] = React.useState(false);

  function displaySidebar() {
    setShowSidebar(true);
  }

  function hideSidebar() {
    setShowSidebar(false);
  }

  const [showSearch, setShowSearch] = React.useState(false);

  function displaySearch() {
    setShowSearch(true);
  }

  function hideSearch() {
    setShowSearch(false);
  }

  if (showSearch) return <SearchNavbar filter={filter} setFilter={setFilter} onClose={hideSearch} />;

  return (
    <>
      <HideOnScroll>
        <AppBar color="primary">
          <Sidebar open={showSidebar} onClose={hideSidebar} />

          <Toolbar>
            {showback ? (
              <MenuButton edge="start">
                <StyledLink to="/songs/">
                  <ArrowBackIcon />
                </StyledLink>
              </MenuButton>
            ) : (
              <MenuButton edge="start" color="secondary" onClick={displaySidebar}>
                <Menu />
              </MenuButton>
            )}

            <Title>
              <Typography variant="subtitle1">
                <StyledLink to="/">
                  Friday Night{" "}
                  <Typography component="span" color="secondary">
                    Church
                  </Typography>
                </StyledLink>
              </Typography>
            </Title>

            <IconButton color="secondary" edge="end" title="List of worship songs">
              <Link color="secondary" to="/songs/" onClick={displaySearch}>
                <Search />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Navbar;
