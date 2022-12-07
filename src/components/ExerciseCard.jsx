import { Link } from "react-router-dom";
import "./styles/ExerciseCard.scss";

export const ExerciseCard = ({ exercise }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      className="exCard"
      to={`/exercise/${exercise.id}`}
      onClick={scrollToTop}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="exCard__tags">
        <button className="exCard__tag">{exercise.bodyPart}</button>
        <button className="exCard__tag">{exercise.target}</button>
      </div>
      <p className="exCard__name">{exercise.name}</p>
    </Link>
  );
};
