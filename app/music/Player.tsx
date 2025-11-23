import ReactAudioPlayer from "react-audio-player";
import Image from "next/image";

interface PlayerProps {
  currentSong: {
    title: string;
    url: string;
    album: string;
    coverUrl: string;
    genre: string;
  };
}

function Player({ currentSong }: PlayerProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden shadow-2xl group">
        <Image
          src={currentSong.coverUrl}
          alt={currentSong.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="w-full text-center mb-6">
        <h2 className="font-heading font-bold text-2xl mb-1 text-gray-900 dark:text-white truncate">
          {currentSong.title}
        </h2>
        <p className="text-primary font-medium">{currentSong.album}</p>
        <div className="mt-2 inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
          {currentSong.genre}
        </div>
      </div>

      <div className="w-full bg-gray-100 dark:bg-white/5 rounded-xl p-4 shadow-inner">
        <ReactAudioPlayer
          src={currentSong.url}
          controls
          className="w-full focus:outline-none"
          style={{ background: 'transparent' }}
        />
      </div>
    </div>
  );
}

export default Player;
