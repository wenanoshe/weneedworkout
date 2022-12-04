import "./styles/Details.scss";
import label_img from "../assets/icons/label-icon.svg";

export const Details = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  return (
    <div className="details">
      <img className="details__img" src={gifUrl} alt={name} />
      <div className="details__data">
        <h2 className="details__title">{name}</h2>
        <p className="details__description">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </p>
        <div className="details__tags">
          <span className="details__tag">
            <img src={label_img} />
            {bodyPart}
          </span>
          <span className="details__tag">
            <img src={label_img} />
            {target}
          </span>
          <span className="details__tag">
            <img src={label_img} />
            {equipment}
          </span>
        </div>
      </div>
    </div>
  );
};
