"use client";

import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import Player from "./Player";
import { Song } from "./Song";

function MusicComponent({ songData }: { songData: Song[] }) {
  const [songs, setSongs] = useState(songData);
  const [currentSong, setCurrentSong] = useState(songData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  let audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    if (currentSong) {
      const duration = audioRef.current.duration;
      const ct = audioRef.current.currentTime;

      setCurrentSong({
        ...currentSong,
        progress: (ct / duration) * 100,
        length: duration,
      });
    }
  };

  return (
    <div>
      <ul>
        {songData.map((song: Song, index) => {
          return (
            <li
              key={index}
              onClick={() => setCurrentSong(song)}
              className="hover:bg-slate-400 hover:text-gray-900 p-4 border border-gray-500"
            >
              {song.title}
            </li>
          );
        })}
      </ul>
      <audio src={currentSong?.url} ref={audioRef} onTimeUpdate={onPlaying} />
      <Player
        audioElem={audioRef}
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
      ></Player>
      <Link href="https://soundcloud.com/toonra">
        <div className="flex m-2">
          Soundcloud
          <BsSoundwave className="text-2xl" />
        </div>
      </Link>
    </div>
  );
}

export default MusicComponent;
