import Image from "next/image";

interface SongProps {
  song: {
    title: string;
    url: string;
    album: string;
    coverUrl: string;
    genre: string;
  };
  isPlaying: boolean;
  onClick: () => void;
}

function Song({ song, isPlaying, onClick }: SongProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group ${isPlaying
          ? "bg-primary/10 border border-primary/20"
          : "hover:bg-white/10 dark:hover:bg-white/5 border border-transparent hover:border-white/10"
        }`}
    >
      <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={song.coverUrl}
          alt={song.title}
          fill
          className={`object-cover transition-transform duration-500 ${isPlaying ? "scale-110" : "group-hover:scale-110"
            }`}
        />
        {isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-1 h-3 bg-white mx-0.5 animate-pulse"></div>
            <div className="w-1 h-4 bg-white mx-0.5 animate-pulse delay-75"></div>
            <div className="w-1 h-2 bg-white mx-0.5 animate-pulse delay-150"></div>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className={`font-medium truncate ${isPlaying ? "text-primary" : "text-gray-900 dark:text-white"}`}>
          {song.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{song.album}</p>
      </div>

      <div className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
        {song.genre}
      </div>
    </div>
  );
}

export default Song;