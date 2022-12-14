import banner from "../assets/images/banner.png";

import "./styles/StartBanner.scss";

export const StartBanner = () => {
  return (
    <div className="sb">
      <div className="sb__legend">
        <h3 className="sb__h3">We need workout</h3>
        <h1 className="sb__title">Sweet, smile and repeat</h1>
        <div className="sb__description">
          Fitness Club <br />
          Check out the most effective exercises personalized to you
        </div>
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
