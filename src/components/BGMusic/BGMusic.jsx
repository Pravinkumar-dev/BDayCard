import { useEffect, useRef } from "react";
import BGAudio from "../../assets/music/blue.mp3";

function BGMusic({ play }) {
  const audioRef = useRef();
  
  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [play]);

  return (
    <audio id="audio" loop ref={audioRef}>
      <source src={BGAudio} />
    </audio>
  );
}

export default BGMusic;
