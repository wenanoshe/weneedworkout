import { helpHttp } from "../helpers/helpHttp.js";
import { EXERCISE_DB_URL, EXERCISE_API_OPTIONS } from "../utils/constants";

export const getExercises = async () => {
  // Gets a response if there saved is in localStorage
  if (localStorage.getItem("EXERCISES")) {
    return JSON.parse(localStorage.getItem("EXERCISES"));
  }

  const apiRes = await helpHttp().get(EXERCISE_DB_URL, EXERCISE_API_OPTIONS);
  return apiRes;
};
