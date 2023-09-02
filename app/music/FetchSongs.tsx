import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function fetchSongData() {
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