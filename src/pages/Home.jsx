import { useEffect, useState } from "react";
import { StartBanner, SearchExercises, Exercises, Footer } from "../components";

import { helpHttp } from "../helpers/helpHttp";
import { EXERCISE_DB_URL, EXERCISE_API_OPTIONS } from "../utils/constants";

const initAllExercises =
  JSON.parse(localStorage.getItem("ALL_EXERCISES")) || [];

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [allExercises, setAllExercises] = useState(initAllExercises);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("ALL_EXERCISES")) {
      setAllExercises(JSON.parse(localStorage.getItem("ALL_EXERCISES")));

      return;
    }

    const allEx = async () => {
      const apiRes = await helpHttp().get(
        EXERCISE_DB_URL,
        EXERCISE_API_OPTIONS
      );
      setAllExercises(apiRes);
    };

    allEx();
  }, []);

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
