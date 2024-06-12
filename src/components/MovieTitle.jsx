import React from "react";

function MovieTitle({ title }) {
  return (
    <a href={`/?id=${title.id}`}>
      <img src={title.titleImg} className="h-40 w-auto rounded-md" />
    </a>
  );
}

export default MovieTitle;
