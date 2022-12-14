import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import {
  EXERCISE_DB_URL,
  EXERCISE_API_OPTIONS,
  YOUTUBE_API_URL,
  YOUTUBE_API_OPTIONS,
} from "../utils/constants";

import { Details, ExerciseVideos } from "../components";

const ExerciesDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getExerciseDetail = async () => {
      const exerciseData = await helpHttp().get(
        `${EXERCISE_DB_URL}/exercise/${id}`,
        EXERCISE_API_OPTIONS
      );
      setExerciseDetail(exerciseData);
    };

    getExerciseDetail();
  }, [id]);

  useEffect(() => {
    const filterResults = (results) => {
      // Only three results which has the video property
      const filtered = results.filter((r) => "video" in r);
      return filtered.slice(0, 3);
    };

    const getExerciseVideos = async (name) => {
      /** Exercise videos data, or "related videos about that exercise" **/

      if (!name) return;

      const parsedQuery = name.replace(/ /g, "%20");

      const videosData = await helpHttp().get(
        `${YOUTUBE_API_URL}/search?query=${parsedQuery}`,
        YOUTUBE_API_OPTIONS
      );

      setExerciseVideos(filterResults(videosData.contents));
    };

    getExerciseVideos(exerciseDetail.name);
  }, [exerciseDetail]);

  return (
    <div style={{ margin: "0 1.5rem" }}>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </div>
  );
};

export default ExerciesDetail;
