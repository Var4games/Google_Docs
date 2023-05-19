import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Avatar } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
const NavBar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      {" "}
      <AppBar position="static">
        <Toolbar>
          {/* Docs Icon */}
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon/>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="Docs">
            <span style={{ color: "#4285F4", fontWeight: "bold" }}>G</span>
            <span style={{ color: "#DB4437", fontWeight: "bold" }}>o</span>
            <span style={{ color: "#F4B400", fontWeight: "bold" }}>o</span>
            <span style={{ color: "#4285F4", fontWeight: "bold" }}>g</span>
            <span style={{ color: "#0F9D58", fontWeight: "bold" }}>l</span>
            <span style={{ color: "#DB4437", fontWeight: "bold" }}>e</span>
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
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center"
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
