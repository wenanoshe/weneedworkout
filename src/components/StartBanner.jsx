import banner from "../assets/images/banner.png";

import "./styles/StartBanner.scss";

export const StartBanner = () => {
  return (
    <div className="sb">
      <div className="sb__legend">
        <h3 className="sb__h3">Fitness Club</h3>
        <h1 className="sb__title">Sweat, Smile And Repeat</h1>
        <p className="sb__description">
          Check out the most effective exercises personalized to you
        </p>
        <button className="sb__btn">
          <a href="#exercises">Explore exercises</a>
        </button>
      </div>

      <div className="sb__right">
        <img src={banner} alt="Fitnes club banner" className="sb__img" />
        <span className="sb__bgStm">Exercise</span>
      </div>
    </div>
  );
};
