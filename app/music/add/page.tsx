import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Song } from "../Song";
export default async function PageAdd() {
  const addSong = async (e: FormData) => {
    "use server";
    const title = e.get("title")?.toString();
    const url = e.get("url")?.toString();

    if (!title || !url) return;
    const newSong: Song = {
      title: title,
      url: url,
      genre: e.get("genre")?.toString(),
      album: e.get("album")?.toString(),
    };
    await setDoc(doc(db, "toonra-song-collection", newSong.title), newSong);
  };
  return (
    <div>
      <form action={addSong} className="flex min-h-screen flex-col items-center p-12">
        <h1>Add new Toonra track!</h1>
        <p>Title:</p>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Url:</p>
        <input
          type="text"
          placeholder="Url"
          name="url"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Genre:</p>
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Album:</p>
        <input
          type="text"
          placeholder="Album"
          name="album"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <br />
        <br />
        <input
          type="submit"
          value="submit"
          className="border border-gray-300 p-2 rounded-md hover:bg-slate-500"
          id="submit"
        />
      </form>
    </div>
  );
}
