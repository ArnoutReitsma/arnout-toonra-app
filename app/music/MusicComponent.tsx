"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import Player from "./Player";
import { Song } from "./Song";

function MusicComponent({ songData }: { songData: Song[] }) {
  const [songs, setSongs] = useState(songData);
  const [currentSong, setCurrentSong] = useState(songData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trigger, setTrigger] = useState(0);
  let audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log('useEffect');
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

  const onEnded = () => {
    setTrigger((trigger) => trigger + 1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="font-extrabold text-4xl mb-5">Music produced by Toonra</h1>
      <ul>
        {songData.map((song: Song, index) => {
          return (
            <li
              key={index}
              onClick={() => setCurrentSong(song)}
              className={`hover:bg-slate-40 p-4 border border-gray-500 ${currentSong.title == song.title ? 'dark:bg-slate-900 bg-slate-600 text-gray-300 border-2 border-gray-500 dark:border-white' : '' }`}
            >
              {song.title}
            </li>
          );
        })}
      </ul>
      <audio
        src={currentSong?.url}
        ref={audioRef}
        onTimeUpdate={onPlaying}
        onEnded={onEnded}
      />
      <Player
        audioElem={audioRef}
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        nextSongTigger={trigger}
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
