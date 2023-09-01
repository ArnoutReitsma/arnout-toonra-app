import { collection, getDocs } from "firebase/firestore";
import MusicComponent from "./MusicComponent";
import { Song, songData2 } from "./Song";
import { db } from "./firebaseConfig";

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "toonra-song-collection"));
  if (!querySnapshot) {
    return songData2;
  }
  const songsData = querySnapshot.docs
    .map<Song>((doc) => ({
      title: doc.data().title,
      url: doc.data().url,
      album: doc.data().album,
      genre: doc.data().genre,
    }))
    .filter((d) => d.url != "deleted");

  return songsData;
};

async function pageMusic() {
  const songData = await fetchData();

  return (
    <div>
      <MusicComponent songData={songData}></MusicComponent>
    </div>
  );
}

export default pageMusic;
