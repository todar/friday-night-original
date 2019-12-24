import React from "react";
import Link from "./Link";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import QueueMusic from "@material-ui/icons/QueueMusic";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Title = styled.span`
  flex-grow: 1;
`;

function Navbar({ showback = false }) {
  return (
    <AppBar color="primary">
      <Toolbar>
        {showback && (
          <IconButton>
            <StyledLink to="/songs/">
              <ArrowBackIcon />
            </StyledLink>
          </IconButton>
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

        <IconButton title="List of worship songs">
          <Link color="secondary" to="/songs/">
            <QueueMusic />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
