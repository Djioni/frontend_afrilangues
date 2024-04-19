import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { RiPauseLine } from "react-icons/ri";

const VideoPlayer = ({ currentVideoDuration, src }) => {
  const [totalDuration, setTotalDuration] = useState(null);
  const [remainingDuration, setRemainingDuration] = useState(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Initialize as true since the video is initially playing
  const [isMuted, setIsMuted] = useState(false);

  const handleDuration = (duration) => {
    // Update state with the total duration of the video
    setTotalDuration(duration);
    currentVideoDuration(duration);
  };

  const handleProgress = (state) => {
    // Calculate remaining duration
    if (totalDuration !== null) {
      const remaining = totalDuration - state.playedSeconds;
      setRemainingDuration(remaining);
      currentVideoDuration(remaining);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url={src}
        width="100%"
        height="100%"
        playing={isPlaying}
        muted={isMuted}
        controls={false}
        onDuration={handleDuration} // Event handler to get duration
        onProgress={handleProgress} // Event handler to get progress
        onError={(error) => console.error("Error playing video:", error)}
      />
      <div className="video_control" style={{ position: "absolute" }}>
        <div onClick={handlePlayPause}>
          {isPlaying ? (
            <RiPauseLine className="icon1" />
          ) : (
            <IoPlayOutline className="icon1" />
          )}
        </div>
        <div onClick={handleToggleMute}>
          {isMuted ? (
            <IoVolumeMuteSharp className="icon" />
          ) : (
            <GoUnmute className="icon" />
          )}
        </div>
      </div>
      {/* {remainingDuration !== null && (
        <p>Remaining Duration: {remainingDuration.toFixed(2)} seconds</p>
      )} */}
    </div>
  );
};

export default VideoPlayer;
