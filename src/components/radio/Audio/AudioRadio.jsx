import React from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import "react-h5-audio-player/lib/styles.css";
import css from './AudioRadio.module.css';

const AudioRadio = ({ url }) => {
  return (
    <>
      <AudioPlayer
        autoPlay
        src={url}
        showJumpControls={false}
        showFilledProgress={false}
        showDownloadProgress={false}
        customProgressBarSection={[<div key="radio-label" className={css.label}>Escuchar radio</div>]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        layout="horizontal-reverse"
        width="70px"
      />
    </>
  );
};

export default AudioRadio;
