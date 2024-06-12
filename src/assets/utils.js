import { getDownloadURL, ref } from "firebase/storage";
import { DB, DBStorage } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { movies } from "./data";

export const fetchVideoUrl = async (path) => {
  const videoRef = ref(DBStorage, path);
  try {
    const url = await getDownloadURL(videoRef);
    return url;
  } catch (error) {
    console.error("Error fetching video URL:", error);
    return "";
  }
};
export const storeTitles = () => {
  movies.forEach(async (movie) => {
    await addDoc(collection(DB, "titles"), movie);
  });
};
export const fetchTitles = async () => {
  const titles = [];
  const snapshot = await getDocs(collection(DB, "titles"));
  snapshot.forEach((doc) => {
    titles.push(doc.data());
  });
  return titles;
};
