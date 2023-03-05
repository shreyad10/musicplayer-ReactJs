import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="music-info">
        <div className="music-title">Song Title</div>
        <div className="music-artist">Artist Name</div>
      </div>

      <div className="music-controls">
      <MdSkipPrevious style={{ fontSize: '40px'}} />
        <button className="play-pause" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="music-progress">
          <div className="progress-bar" />
        </div>
        <MdSkipNext style={{ fontSize: "40px" }} />
      </div>
    </div>
  );
};

export default MusicPlayer;
