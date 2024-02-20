import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export async function useFirestore(/*path: String*/) /*: [any, QRL<(value: any) => void>]*/ {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log(`Document written with name: ${docRef.id}`);
  } catch (e) {
    //console.error("Error adding document: ", e);
  }
}
