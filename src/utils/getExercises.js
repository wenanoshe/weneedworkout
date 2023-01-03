import { helpHttp } from "../helpers/helpHttp.js";
import { EXERCISE_DB_URL, EXERCISE_API_OPTIONS } from "../utils/constants";

export const getAllExercises = async () => {
  // Gets a response if there saved is in localStorage
  if (localStorage.getItem("ALL_EXERCISES")) {
    return JSON.parse(localStorage.getItem("ALL_EXERCISES"));
  }

  const apiRes = await helpHttp().get(EXERCISE_DB_URL, EXERCISE_API_OPTIONS);
  return apiRes;
};
