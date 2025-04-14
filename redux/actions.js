import {
  ADD_MOVIE,
  DELETE_MOVIE,
  FETCH_MOVIES,
  LOGIN,
  LOGOUT,
} from "./actionTypes";
import { db } from "../config/config";
import {
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";

const moviesCollection = "movies";
const collectRef = collection(db, moviesCollection);

export const fetchMovies = () => async (dispatch) => {
  try {
    console.log("fetching favs...");

    const snapshotMovies = onSnapshot(collectRef, (snapshot) => {
      const moviesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("favs fetched: ", moviesList);
      dispatch({
        type: "FETCH_MOVIES",
        payload: moviesList,
      });
    });

    return snapshotMovies;
  } catch (err) {
    console.log("err fetchin favs: ", err);
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    console.log("adding fav movie...");
    const docRef = await addDoc(collectRef, movie);
    console.log("data saved");
  } catch (err) {
    console.log("err adding movie: ", err);
  }
};

export const deleteMovie = (docID) => async (dispatch) => {
  try {
    console.log("deleting movie...");
    const docRef = doc(collectRef, docID);
    await deleteDoc(docRef);

    console.log("movie deleted");
    dispatch({
      type: "DELETE_MOVIE",
      payload: docID,
    });
  } catch (err) {
    console.log("error deleting movie: ", err);
  }
};
export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
