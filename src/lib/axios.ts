// src/lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://assignment.devotel.io",
  headers: {
    "Content-Type": "application/json",
  },
});
