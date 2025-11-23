"use client";
import { useState } from "react";
import Song from "./Song";
import Player from "./Player";

interface SongData {
  title: string;
  url: string;
  album: string;
  coverUrl: string;
  order: number;
  genre: string;
}

function GroupedAlbumSongData(songData: SongData[]) {
  return songData.reduce((group: { [key: string]: SongData[] }, item) => {
    const albumName = item.album || "Singles";
    if (!group[albumName]) {
      group[albumName] = [];
    }
    group[albumName].push(item);
    return group;
  }, {});
}

function MusicComponent({ songData }: { songData: SongData[] }) {
  const [currentSong, setCurrentSong] = useState<SongData>(songData[0]);
  const albumGroupedSongData = GroupedAlbumSongData(songData);

  // Helper to ensure coverUrl exists
  const getCoverUrl = (song: SongData) => song.coverUrl || "/arnout-reitsma-nobg.png"; // Use profile pic as fallback or a dedicated default

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-heading font-bold text-4xl mb-8 text-center text-gray-900 dark:text-white">
          Music Collection
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Player Section - Sticky on Desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="glass p-6 rounded-3xl">
              <Player currentSong={{ ...currentSong, coverUrl: getCoverUrl(currentSong) }} />
            </div>
          </div>

          {/* Song List Section */}
          <div className="lg:col-span-8 space-y-8">
            {Object.entries(albumGroupedSongData).map(([album, songs]) => (
              <div key={album} className="glass p-6 rounded-3xl animate-slide-up">
                <h2 className="font-heading font-semibold text-2xl mb-6 px-2 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {album}
                </h2>
                <div className="space-y-2">
                  {songs
                    .sort((a, b) => a.order - b.order)
                    .map((song, index) => (
                      <Song
                        key={index}
                        song={{ ...song, coverUrl: getCoverUrl(song) }}
                        isPlaying={currentSong.title === song.title}
                        onClick={() => setCurrentSong(song)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicComponent;
