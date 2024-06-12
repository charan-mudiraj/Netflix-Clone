import React, { useEffect, useRef, useState } from "react";
import { fetchVideoUrl } from "../assets/utils";

function Banner({ title }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);
  useEffect(() => {
    fetchVideoUrl(title.videoPath).then((url) => {
      if (url) {
        setVideoSrc(url);
        setIsVideoLoaded(true);
      }
    });
  }, []);
  const playVideo = () => {
    if (!isPaused) return;
    if (isVideoLoaded && videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };
  const pauseVideo = () => {
    if (isPaused) return;
    if (isVideoLoaded && videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };
  return (
    <div className="w-screen relative">
      <video
        ref={videoRef}
        muted
        src={videoSrc}
        onEnded={pauseVideo}
        className={`w-screen h-auto relative transition-opacity duration-700 scale-150 ${
          isPaused ? "z-0 opacity-0" : "z-10 opacity-1"
        }`}
      ></video>
      <img
        src={title.bannerImg}
        className={`w-screen h-auto absolute top-0 transition-opacity duration-700 ${
          isPaused ? "z-10 opacity-1" : "z-0 opacity-0"
        }`}
      />

      <div className="w-screen h-full z-20 absolute top-0">
        <div
          className="h-full"
          style={{
            boxShadow: "inset 0px -150px 100px -10px var(--primary-color)",
          }}
        >
          <div
            className="h-full flex"
            style={{
              boxShadow: "inset 600px 0px 200px 0px var(--primary-color)",
            }}
          >
            <div className="md:w-[45%] w-screen md:relative absolute xl:pt-[8%] px-[70px] flex flex-col gap-8 lg:text-base text-xs">
              <img src={title.logoImg} className="md:w-[80%] w-[40%]" />
              <div className="flex flex-col gap-5 opacity-60">
                <div className="flex gap-3 text-sm">
                  <p>{title.year}</p> |<p>{title.duration}</p> |
                  <p>{title.genre}</p>
                </div>
                <p className="sm:block hidden">{title.info}</p>
                <p>
                  <span>Starring: </span>
                  <span className="italic">{title.starring}</span>
                </p>
              </div>
            </div>
            <div
              className="md:w-[55%] w-screen h-full md:relative absolute z-30"
              onMouseEnter={playVideo}
              onMouseMove={playVideo}
              onMouseLeave={pauseVideo}
            ></div>
          </div>
        </div>
        <div className="h-full bg-black"></div>
      </div>
    </div>
  );
}

export default Banner;
