import lost from "../assets/images/ghost-svgrepo-com.svg";
import "./styles/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <p>
        Sorry, you are lost
        <br />
        <i>
          <b>404</b> Not found
        </i>
      </p>
      <img src={lost} alt="ghost svgrepo" />
    </div>
  );
}
