import { collection, getDocs } from "firebase/firestore";
import MusicComponent from "./MusicComponent";
import { db } from "./firebaseConfig";

async function fetchSongData() {
  const querySnapshot = await getDocs(collection(db, "toonra-song-collection"));
  const songsData = querySnapshot.docs
    .map((doc) => ({
      title: doc.data().title,
      url: doc.data().url,
      album: doc.data().album,
      genre: doc.data().genre,
    }))
    .filter((d) => d.url != "deleted");
  return songsData;
}

async function pageMusic() {
  const songData = await fetchSongData();

  return (
    <div>
      <MusicComponent songData={songData}></MusicComponent>
    </div>
  );
}

export default pageMusic;
