import { getDocs, addDoc, collection, query, where } from 'firebase/firestore';
import { db } from '../scripts/firebase';

const dbInstance = collection(db, 'users');

export const addUser = (value) => {
  addDoc(dbInstance, {
    username: value
  });
};

export const getUsers = async () => {
  const q = query(
    collection(db, "users"),
    where("username", "==", 'Bean')
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

export const editUser = (id, value) => {
  const collectionById = doc(db, 'users', id)
  updateDoc(collectionById, {
      username: value
  });
};
