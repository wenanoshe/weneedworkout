import { useEffect, useState } from "react";
import { StartBanner, SearchExercises, Exercises, Footer } from "../components";

const initExercises = JSON.parse(localStorage.getItem("EXERCISES")) || [];

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState(initExercises);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!exercises.error) {
      localStorage.setItem("EXERCISES", JSON.stringify(exercises));
    }
  }, [exercises]);

  return (
    <main>
      <StartBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        setLoading={setLoading}
      />
      <Exercises
        loading={loading}
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </main>
  );
};

export default Home;
