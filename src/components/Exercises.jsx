import "./styles/Exercises.scss";

import ghostImage from "../assets/images/ghost-svgrepo-com.svg";

import { ExerciseCard, Loading } from "./index";
import { useEffect, useState } from "react";
import { ArrowButton } from "./index";

import { getAllExercises } from "../utils/getExercises";
import { helpHttp } from "../helpers/helpHttp";
import { EXERCISE_DB_URL, EXERCISE_API_OPTIONS } from "../utils/constants.js";

export const Exercises = ({ exercises, setExercises, bodyPart, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;
  const numberOfPages = Math.ceil(exercises.length / exercisesPerPage);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises =
    exercises.length > 0
      ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
      : [];

  const handleBackPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage >= numberOfPages) return;
    setCurrentPage(currentPage + 1);
  };

  /* EFFECTS */
  useEffect(() => {
    // Self declared async function to fetch thd data
    (async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await getAllExercises();
      } else {
        exercisesData = await helpHttp().get(
          `${EXERCISE_DB_URL}/bodyPart/${bodyPart}`,
          EXERCISE_API_OPTIONS
        );
      }

      setExercises(exercisesData);
    })();
  }, [bodyPart]);

  return (
    <div id="exercises" className="exercises">
      <h2 className="exercises__title">Showing Results</h2>
      {loading && <Loading />}
      {exercises.error ? (
        <div className="exercises__errorCard">
          <p>{exercises.message}</p>
          <img src={ghostImage} alt="ghost not found from svgrepo.com" />
        </div>
      ) : (
        currentExercises.length > 0 && (
          <>
            <div className="exercises__results">
              {currentExercises.map((exercise, index) => {
                return <ExerciseCard exercise={exercise} key={index} />;
              })}
            </div>

            <div className="exercises__navigation">
              <ArrowButton onClick={handleBackPage} direction="left" />

              <p>
                {currentPage} of {numberOfPages}
              </p>

              <ArrowButton onClick={handleNextPage} direction="right" />
            </div>
          </>
        )
      )}
    </div>
  );
};
