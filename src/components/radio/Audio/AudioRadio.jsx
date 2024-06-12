import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioRadio = ({ url }) => {
  return (
    <>
      <AudioPlayer autoPlay src={url} />
    </>
  );
};

export default AudioRadio;
