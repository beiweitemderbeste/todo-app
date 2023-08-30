import express from 'express';
import cors from 'cors';
import pool from 'db';

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS middleware to handle cross-origin requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// API routes

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
