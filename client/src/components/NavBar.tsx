import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useGetUser from "../hooks/useGetUser";
import axios from "axios";
import { Link } from "react-router-dom";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { isAdmin, user } = useGetUser();
  const logout = async () => {
    await axios.get("api/user/delete-cookie");
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*Icon*/}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginRight: "5em",
            }}
          >
            Itay-Amosi-Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Box
            sx={{
              justifyContent: "space-around",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                borderColor: "white",
                border: "1px solid",
                my: 2,
                borderRadius: '8px',
                color: "white",
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                borderColor: "white",
                border: "1px solid",
                my: 2,
                borderRadius: '8px',
                color: "white",
              }}
              component={Link}
              to="/Projects"
            >
              Projects
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                borderColor: "white",
                border: "1px solid",
                my: 2,
                borderRadius: '8px',
                color: "white",
              }}
              component={Link}
              to="/About"
            >
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
                {/*add avatars*/}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link onClick={logout} to="/Profile">
                  <Typography sx={{ color: "black", display: "block" }}>
                    Profile
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                {isAdmin && (
                  <Link to="/admin">
                    <Typography sx={{ color: "black", display: "block" }}>
                      Admin
                    </Typography>
                  </Link>
                )}
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                {user ? (
                  <Link onClick={logout} to="/login">
                    <Typography sx={{ color: "red" }}>Logout</Typography>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Typography sx={{ color: "green", display: "block" }}>
                      Login
                    </Typography>
                  </Link>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
