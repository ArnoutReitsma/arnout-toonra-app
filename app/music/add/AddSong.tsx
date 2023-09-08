"use server";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Song } from "../Song";

export const addSong = async (e: FormData) => {
  const title = e.get("title")?.toString();
  const url = e.get("url")?.toString();

  if (!title || !url) return { message: "Enter title and url" };;
  const newSong: Song = {
    title: title,
    url: url,
    coverUrl: e.get("coverUrl")?.toString(),
    genre: e.get("genre")?.toString(),
    album: e.get("album")?.toString(),
    order: Number(e.get("order")?.toString()),
  };
  try {
    await setDoc(doc(db, "toonra-song-collection", newSong.title), newSong);
    return { message: "Added song" };
  } catch (e) {
    return { message: "Failed adding song: " + e.message };
  }
};
