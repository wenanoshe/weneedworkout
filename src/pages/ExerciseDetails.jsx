import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import {
  EXERCISE_DB_URL,
  EXERCISE_API_OPTIONS,
  YOUTUBE_API_URL,
  YOUTUBE_API_OPTIONS,
} from "../utils/constants";

import { Details, ExerciseVideos, SimilarExercises } from "../components";

const ExerciesDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  const filterResults = (results) => {
    // Only three results which has the video property
    const filtered = results.filter((r) => "video" in r);
    return filtered.slice(0, 3);
  };

  useEffect(() => {
    (async function () {
      const exerciseData = await helpHttp().get(
        `${EXERCISE_DB_URL}/exercise/${id}`,
        EXERCISE_API_OPTIONS
      );
      setExerciseDetail(exerciseData);

      // Exercise videos data, or "related videos about that exercise"
      const videosData = await helpHttp().get(
        `${YOUTUBE_API_URL}/search?query=${exerciseDetail.name}`,
        YOUTUBE_API_OPTIONS
      );

      console.log(filterResults(videosData.contents));
      // setExerciseVideos(videosData.contents.slice(0, 3));
    })();
  }, [id]);

  return (
    <div>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </div>
  );
};

export default ExerciesDetail;
