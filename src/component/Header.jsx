import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import NoteIcon from "@mui/icons-material/StickyNote2";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fbc02d",
        color: "#000",
        width: "100vw", // Ensure full width
        marginLeft: "calc(-1 * (100vw - 100%)/2)", // Fix scroll caused by scrollbar gap
      }}
      elevation={3}
    >
      <Toolbar>
        <NoteIcon sx={{ marginRight: 1 }} />
        <Typography variant="h6" component="div">
          Keeper App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
