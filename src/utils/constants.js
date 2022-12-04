export const EXERCISE_DB_URL = "https://exercisedb.p.rapidapi.com/exercises";
export const YOUTUBE_API_URL =
  "https://youtube-search-and-download.p.rapidapi.com";

export const EXERCISE_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const YOUTUBE_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
