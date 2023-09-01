import { collection, getDocs } from "firebase/firestore";
import MusicComponent from "./MusicComponent";
import { Song, songData2 as backUpSongData } from "./Song";
import { db } from "./firebaseConfig";

export async function fetchData(): Promise<Song[]> {
  try {
    const querySnapshot = await getDocs(
      collection(db, "toonra-song-collection")
    );
    const songsData: Song[] = querySnapshot.docs
      .map(
        (doc) =>
          ({
            title: doc.data().title,
            url: doc.data().url,
            album: doc.data().album,
            genre: doc.data().genre,
          }) as Song
      )
      .filter((d) => d.url != "deleted") as Song[];
    return songsData;
  } catch {
    return backUpSongData;
  }
}

async function pageMusic() {
  const songData: Song[] = await fetchData();

  return (
    <div>
      <MusicComponent songData={songData}></MusicComponent>
    </div>
  );
}

export default pageMusic;
