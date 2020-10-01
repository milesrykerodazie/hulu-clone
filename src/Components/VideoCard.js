import React, { forwardRef } from "react";
import "../ComponentsCss/VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const base_url = "http://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <h2>{movie?.title || movie?.original_title}</h2>
      <img
        src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="h4"
        truncateText="..."
        text={movie?.overview}
      />
      <p className="videoCard__stats">
        {movie?.release_date || movie?.first_air_date} •
        <ThumbUpAltIcon />
        {movie?.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
