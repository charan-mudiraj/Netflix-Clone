import React from "react";

function MovieTitle({ title }) {
  return (
    <a
      href={`/?id=${title.id}`}
      className="hover:scale-110 transition-transform duration-500 relative z-20 hover:z-30"
    >
      <img src={title.titleImg} className="h-40 w-auto rounded-md" />
    </a>
  );
}

export default MovieTitle;
