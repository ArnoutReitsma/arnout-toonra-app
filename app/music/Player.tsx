import React, { Ref, RefObject, useEffect, useRef } from "react";
import Image from "next/image";
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
      skiptoNext();
      setIsPlaying(true);
    }
  }, [nextSongTigger]);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') {
      e.preventDefault();
      PlayPause();
      isPlaying = !isPlaying;
    }
  }

  const PlayPause = () => { 
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  
    // Clean up the event listener when the component unmounts
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  });

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
    <div className="fixed z-20 bottom-0 min-w-full xl:w-[60%] xl:min-w-fit p-4 border border-gray-500 rounded-lg dark:text-gray-400 flex flex-col items-center justify-between bg-white dark:bg-black">
      <div className="flex relative">
        {currentSong.coverUrl ? (
          <Image className="mb-2 mx-2 border border-l-gray-800"
            src={currentSong.coverUrl}
            width={150}
            height={150}
            alt="cover"
          ></Image>
        ) : (
          ""
        )}
        <div className="relative">
          <div className="inset-x-0 bottom-0">
            <p className="md:text-2xl">{currentSong.title}</p>
            {currentSong.album ? (
              <p className="text-sm">Album: {currentSong.album}</p>
            ) : (
              ""
            )}
            {currentSong.genre ? (
              <p className="text-sm">Genre: {currentSong.genre}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div
          className="w-full bg-gray-500 h-2 rounded-full cursor-pointer"
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
