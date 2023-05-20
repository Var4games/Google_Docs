import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  ListItemIcon
} from "@mui/material";
import { Description, Search as SearchIcon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import "./styles.css";
const NavBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  

  return (
    <>
      {" "}
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Docs Icon */}
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon style={{ color: "gray" }} />
          </IconButton>
          <ListItemIcon style={{ color: "#4285F4" }}>
            <Description
              style={{ color: "#4285F4", padding: 6, fontSize: 40, size: 30 }}
            />
          </ListItemIcon>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="Docs"
            style={{ color: "#4285F4", padding: -28 }}
          >
            <span style={{ color: "gray", fontWeight: "lighter" }}>Docs</span>
          </IconButton>
          {/* Search Bar */}
          <div
            style={{
              flexGrow: 1,
              marginLeft: "20%",
              marginRight: "20%",
              alignItems: "center"
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "4px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                transition: "background-color 0.3s, box-shadow 0.3s",
                boxShadow: "none"
              }}
              onClick={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0, 0, 0, 0.5)";
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search" style={{ marginLeft: "5px" }} />
            </div>
          </div>

          {/* Profile Picture Icon */}
          <IconButton color="inherit" aria-label="Profile">
            <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
    </>
  );
};

export default NavBar;
