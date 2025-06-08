import { useEffect } from "react";
import BGAudio from "../../assets/music/blue.mp3";

function BGMusic({ play }) {
  useEffect(() => {
    if (play) {
      const bgMusic = document.getElementById("audio");
      bgMusic.play();
    }
  }, [play]);

  return (
    <audio id="audio" loop>
      <source src={BGAudio} />
    </audio>
  );
}

export default BGMusic;
