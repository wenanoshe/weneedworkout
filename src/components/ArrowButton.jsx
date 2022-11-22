import "./styles/ArrowButton.scss";

export const ArrowButton = ({ className, onClick, direction = "right" }) => {
  return (
    <button
      type="button"
      className={`${className ? className : ""} arrowBtn`}
      onClick={onClick}
      data-direction={direction}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 40 40"
        width="25px"
      >
        <path d="m26.8 35.05-9.9-9.9q-.25-.3-.375-.575-.125-.275-.125-.625t.125-.625q.125-.275.375-.575l9.95-9.95q.5-.5 1.225-.5.725 0 1.225.5.5.5.475 1.25-.025.75-.525 1.25l-8.65 8.65 8.7 8.7q.5.5.5 1.2t-.5 1.2q-.5.5-1.25.5t-1.25-.5Z" />
      </svg>
    </button>
  );
};
