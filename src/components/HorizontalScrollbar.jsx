import { useRef } from "react";
import "./styles/HorizontalScrollbar.scss";

import { ArrowButton } from "./index";

const getUrl = (name) => {
  const a = new URL(`../assets/images/${name}.svg`, import.meta.url).pathname;
  return a;
};

const HorizontalScrollbar = ({ data, setBodyPart }) => {
  const scrollRef = useRef(null);

  const navigateBack = () => {
    if (scrollRef.current.scrollLeft <= 0) {
      return;
    }

    scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth * 0.9;
  };

  const navigateNext = () => {
    if (
      scrollRef.current.scrollLeft >=
      scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
    ) {
      return;
    }
    scrollRef.current.scrollLeft += scrollRef.current.offsetWidth * 0.9;
  };

  const handleClickTab = (item) => {
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    setBodyPart(item);
  };

  return (
    <div className="hsb">
      <div className="hsb__wrapper" ref={scrollRef}>
        <div className="hsb__scroll">
          {data.map((item) => (
            <div
              className="hsb__tab"
              key={item}
              onClick={() => handleClickTab(item)}
            >
              <img className="hsb__img" src={getUrl(item)} alt={item} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hsb__navigation">
        <ArrowButton onClick={navigateBack} direction="left" />

        <ArrowButton onClick={navigateNext} direction="right" />
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
