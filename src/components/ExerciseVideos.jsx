import { Loading } from "./Loading";

export const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loading />;

  return (
    <div>
      <h3>Watch {name} similar exercises</h3>
      <div>
        {exerciseVideos?.slice(0, 3).map(i, (index) => {
          <a
            target="_blank"
            rel="noreferrer"
            key={index}
            href={`https://www.youtube.com/watch?v=${i.video.videoId}`}
          >
            <img src={i.video.thumbnails[0].url} alt={i.video.title} />
          </a>;
        })}
      </div>
    </div>
  );
};
