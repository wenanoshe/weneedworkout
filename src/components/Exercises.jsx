import "./styles/Exercises.scss";

import ghostImage from "../assets/images/ghost-svgrepo-com.svg";

import { ExerciseCard, Loading } from "./index";
import { useState } from "react";
import { ArrowButton } from "./index";

export const Exercises = ({ exercises, setExercises, bodyPart, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;
  const numberOfPages = Math.ceil(exercises.length / exercisesPerPage);

  const indexOfLastExercise = currentPage * exercisesPerPage; // 1 * 9 = 9
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // 9 - 9 = 0

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
