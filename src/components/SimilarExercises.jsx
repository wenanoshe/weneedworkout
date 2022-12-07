import { Loading, ExerciseCard } from "./index";

import "./styles/SimilarExercises.scss";

export const SimilarExercises = ({ similarExercises }) => {
  if (!similarExercises.length) {
    return <Loading />;
  }
  return (
    <div className="similarExercises">
      <h2 className="similarExercises__title">Similar exercises</h2>
      <div className="similarExercises__exercises">
        {similarExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </div>
    </div>
  );
};
