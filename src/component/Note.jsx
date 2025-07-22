import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import PushPinIcon from "@mui/icons-material/PushPin"; // Optional
import { IconButton } from "@mui/material";

export default function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <IconButton className="pin-btn" aria-label="pin note">
        <PushPinIcon fontSize="small" />
      </IconButton>

      <h1>{title}</h1>
      <p>{content}</p>

      <IconButton
        className="delete-btn"
        aria-label="delete note"
        onClick={() => onDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
