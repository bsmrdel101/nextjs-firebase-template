import { URL } from 'src/scripts/firebase';
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import axios from 'axios';

const db = getFirestore();

export const getUsers = async () => {
  try {
    const res = await axios.get(`${URL}/users/user-data`);
    console.log(res.data.fields.username.stringValue);
  } catch (error) {
    console.log(error);
  }
};

export const updateUsername = async (newName) => {
  try {
    await setDoc(doc(db, 'users', 'user-data'), {
      username: newName
    });
  } catch (error) {
    console.log(error);
  }
};
