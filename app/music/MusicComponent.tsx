"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import Player from "./Player";
import { Song } from "./Song";
function GroupedAlbumSongData(songData: Song[]) {
  return songData.reduce((group: { [key: string]: Song[] }, item) => {
    // .sort((a, b) => a.order - b.order);
    if (!group[item.album]) {
      group[item.album] = [];
    }
    group[item.album].push(item);
    return group;
  }, {});
}
function MusicComponent({ songData }: { songData: Song[] }) {
  const [songs, setSongs] = useState(songData);
  const [currentSong, setCurrentSong] = useState(songData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trigger, setTrigger] = useState(0);
  let audioRef = useRef<HTMLAudioElement | null>(null);
  let albumGroupedSongData = GroupedAlbumSongData(songData);

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

  const onEnded = () => {
    setTrigger((trigger) => trigger + 1);
  };

  return (
    <div
      className="flex flex-col items-center p-6 md:p-12"
    >
      <h1 className="font-extrabold text-4xl">Music produced by Toonra</h1>
      <Link href="https://soundcloud.com/toonra">
        <div className="flex m-3">
          Soundcloud
          <BsSoundwave className="text-2xl" />
        </div>
      </Link>
      <ul className="min-w-full md:min-w-[50rem] mb-[13rem]">
        {Object.entries(albumGroupedSongData).map(([album, songs]) => {
          return (
            <details
              key={album}
              className="border border-double border-s-4 border-gray-400 dark:border-white mb-2 cursor-pointer drop-shadow rounded-md bg-inherit px-5 py-1 text-lg"
              open={true}
            >
              <summary>
                <p>{album ? album : "None"}</p>
              </summary>
              {songs.map((song: Song, index: number) => (
                <li
                  key={index}
                  onClick={() => {
                    setCurrentSong(song);
                    setIsPlaying(true);
                  }}
                  className={`hover:bg-slate-40 p-2 md:p-3 border text-sm md:text-base border-gray-500 ${
                    currentSong.title == song.title
                      ? "dark:bg-slate-900 bg-slate-600 text-gray-300 border-2 border-gray-500 dark:border-white"
                      : ""
                  }`}
                >
                  {song.title}
                </li>
              ))}
            </details>
          );
        })}
      </ul>
      <audio
        autoPlay
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
    </div>
  );
}

export default MusicComponent;
