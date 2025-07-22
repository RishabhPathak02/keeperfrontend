import axios from "axios";

// Base URL for Strapi backend notes API
const BASE_URL = "http://localhost:1337/api/notes";

// =====================================
// Function: getNotes
// Description: Fetch all notes from backend
// =====================================
export const getNotes = async () => {
  const res = await axios.get(BASE_URL);

  // Transform Strapi response format into simplified note object
  return res.data.data.map((item) => ({
    id: item.documentId, 
    title: item.title,
    content: item.content,
  }));
};

// =====================================
// Function: addNote
// Description: Send a new note to backend and return the saved note
// =====================================
export const addNote = async (note) => {
  const newNote = {
    title: note.title,
    content: note.content,
  };

  // Send POST request to create a new note in Strapi
  const res = await axios.post(BASE_URL, { data: newNote });

  const item = res.data.data;

  // Return simplified note object (with id for React key)
  return {
    id: item.id, 
    title: item.title,
    content: item.content,
  };
};

// =====================================
// Function: deleteNote
// Description: Delete a note from backend using its ID
// =====================================
export const deleteNote = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
