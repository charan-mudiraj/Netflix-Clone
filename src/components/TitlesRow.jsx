import React, { useEffect, useRef } from "react";
import MovieTitle from "./MovieTitle";

function TitlesRow({ header, titles }) {
  const scrollerRef = useRef(null);

  const onWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollerRef.current.scrollLeft += e.deltaY;
    }
  };
  useEffect(() => {
    if (scrollerRef.current)
      scrollerRef.current.addEventListener("wheel", onWheel);
    return () => {
      if (scrollerRef.current)
        scrollerRef.current.removeEventListener("wheel", onWheel);
    };
  }, []);
  return (
    <div>
      <p className="md:pl-[100px] pl-[50px] opacity-60 text-xl">{header}</p>
      <div
        className="overflow-x-auto w-screen mt-2 md:pl-[70px] pl-[35px] pr-4 scrollbar-hidden"
        ref={scrollerRef}
      >
        <div className="flex gap-2 w-max">
          {titles.map((title, i) => (
            <MovieTitle key={i} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TitlesRow;
