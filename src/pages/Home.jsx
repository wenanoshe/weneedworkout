import { useState } from "react";
import { StartBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

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
