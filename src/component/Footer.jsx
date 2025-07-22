import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
        padding: "10px 0",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {currentYear} Keeper App. All rights reserved.
      </Typography>
    </Box>
  );
}
