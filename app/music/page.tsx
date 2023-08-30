import { collection, getDocs } from "firebase/firestore";
import MusicComponent from "./MusicComponent";
import { Song } from "./Song";
import { db } from "./firebaseConfig";

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "toonra-song-collection"));
  const songsData = querySnapshot.docs.map<Song>((doc) => ({
    title: doc.data().title,
    url: doc.data().url,
  }));
  return songsData;
};

async function Music() {
  const songData = await fetchData();

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="font-extrabold text-4xl mb-5">Music produced by Toonra</h1>
      <MusicComponent songData={songData}></MusicComponent>
    </div>
  );
}

export default Music;
