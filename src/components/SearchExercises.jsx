import { useState } from "react";
import "./styles/SearchExercises.scss";

import { getExercises } from "../utils/getExercises";

import HorizontalScrollbar from "./HorizontalScrollbar";

const BODY_PARTS = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

export const SearchExercises = ({ setExercises, setBodyPart, setLoading }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    window.scrollTo({ top: 1450, left: 100, behavior: "smooth" });

    if (search) {
      // Verify if there is data located in localStorage
      let exercisesData = await getExercises();

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setLoading(false);

      if (searchedExercises.length === 0) {
        setExercises({
          error: true,
          message: "No matching exercises",
        });
        return;
      }

      setExercises(searchedExercises);
    }
  };

  return (
    <div className="searchEx">
      <h2 className="searchEx__title">Awesome Exercises You Should Know</h2>
      <form className="searchEx__form">
        <input
          type="text"
          name="SearchExercises"
          value={search}
          onChange={handleChange}
          className="searchEx__input"
          placeholder="Search Exercises"
        />
        <button type="submit" className="searchEx__btn" onClick={handleSubmit}>
          Search
          <svg
            className="searchEx__icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
          >
            <path d="m38.35 41.3-11.9-11.85Q25 30.65 23 31.35t-4.25.7q-5.65 0-9.525-3.9t-3.875-9.4q0-5.5 3.9-9.4 3.9-3.9 9.4-3.9 5.55 0 9.4 3.9 3.85 3.9 3.85 9.4 0 2.2-.65 4.15-.65 1.95-1.95 3.7l11.95 11.85q.6.6.6 1.425 0 .825-.65 1.425-.6.6-1.45.6t-1.4-.6ZM18.7 28.05q3.85 0 6.55-2.725 2.7-2.725 2.7-6.575t-2.7-6.575Q22.55 9.45 18.7 9.45q-3.95 0-6.675 2.725Q9.3 14.9 9.3 18.75t2.725 6.575Q14.75 28.05 18.7 28.05Z" />
          </svg>
        </button>
      </form>
      <HorizontalScrollbar data={BODY_PARTS} setBodyPart={setBodyPart} />
    </div>
  );
};
