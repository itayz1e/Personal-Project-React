import { Link } from "react-router-dom";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CommentIcon from "@mui/icons-material/Comment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HomeIcon from "@mui/icons-material/Home";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

function SideNavBar() {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <aside>
        <header>
          <div className="profile" key="profile">
            <img
              className="profile-picture"
              src="../../public/me.png"
              alt="Profile-Imge"
            />
            <p>Itay Amosi</p>
          </div>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <Link style={{ color: "black" }} to={"/"}>
                  <ListItemText>Home</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <Link style={{ color: "black" }} to={"/projects"}>
                  <ListItemText>projects</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText>Comments</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText>Users</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </header>
      </aside>
    </Drawer>
  );
}

export default SideNavBar;
