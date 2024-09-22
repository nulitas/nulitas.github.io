import { useState, useRef } from "react";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import music from "../../public/audio/beneath-the-mask.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
      {/* Song Title and Icon */}
      <motion.div
        animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{
          repeat: isPlaying ? Infinity : 0,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <FaMusic size={20} aria-hidden="true" />
      </motion.div>
      <h1 className="text-lg font-medium text-black">Beneath the Mask</h1>
      {/* Audio Player */}
      <audio ref={audioRef} src={music} loop />
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="p-3 bg-[#1d1d1d] text-white rounded-full shadow-md"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
