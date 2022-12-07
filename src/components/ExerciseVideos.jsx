import { Loading } from "./Loading";
import "./styles/ExerciseVideos.scss";

export const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loading />;

  return (
    <div className="exerciseVideos">
      <h2 className="exerciseVideos__title">
        Watch <span className="exerciseVideos__span">"{name}"</span> similar
        exercises
      </h2>
      <div className="exerciseVideos__videos">
        {exerciseVideos.map((video, index) => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              key={index}
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              className="exerciseVideos__video"
            >
              <figure>
                <img
                  src={video.video.thumbnails[0].url}
                  alt={video.video.title}
                />
                <figcaption>{video.video.title}</figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </div>
  );
};
