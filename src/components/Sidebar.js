import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Link from "./Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import QueueMusic from "@material-ui/icons/QueueMusic";
import Home from "@material-ui/icons/Home";

function SidebarLink(props) {
  const { icon, primary, to } = props;
  const renderLink = React.useMemo(() => React.forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />), [to]);

  return (
    <ListItem button component={renderLink} onClick={props.onClose}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
}

function Sidebar({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <List style={{ width: "240px" }}>
        <SidebarLink icon={<Home />} to="/" primary={"Home"} onClose={onClose} />
        <SidebarLink icon={<QueueMusic />} to="/songs/" primary={"Songs"} onClose={onClose} />
      </List>
    </Drawer>
  );
}

export default Sidebar;
