import React, { Ref, RefObject, useEffect, useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { Song } from "./Song";
type PlayerProps = {
  audioElem: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
  songs: Song[];
  nextSongTigger: number;
};

const Player = ({
  audioElem,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
  nextSongTigger,
}: PlayerProps) => {
  let clickRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (nextSongTigger) {
      console.log("nextSongTigger");
      skiptoNext();
      setIsPlaying(true);
    }
  }, [nextSongTigger]);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e: React.MouseEvent<HTMLElement>) => {
    if (clickRef.current) {
      let width = clickRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;
      const divprogress = (offset / width) * 100;
      audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
    }
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };
  return (
    <div className="w-1/2 p-4 border border-gray-500 rounded-lg text-gray-400 flex flex-col items-center justify-between bg-black mt-5">
      <div className="text-2xl">
        <p>{currentSong.title}</p>
        {currentSong.album ? <p className="text-sm">Album: {currentSong.album}</p> : ""}
        {currentSong.genre ? <p className="text-sm">Genre: {currentSong.genre}</p> : ""}
      </div>
      <div className="w-full">
        <div
          className="w-full bg-gray-500 h-1 rounded-full cursor-pointer"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="w-0 h-full bg-green-500 rounded-full"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center mt-3">
        <BsFillSkipStartCircleFill
          className="action-button"
          onClick={skipBack}
        />
        {isPlaying ? (
          <BsFillPauseCircleFill
            className="action-button"
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill className="action-button" onClick={PlayPause} />
        )}
        <BsFillSkipEndCircleFill
          className="action-button"
          onClick={skiptoNext}
        />
      </div>
    </div>
  );
};

export default Player;
