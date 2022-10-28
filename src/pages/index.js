import Head from 'next/head';
import { useEffect } from 'react';
import { URL } from 'src/scripts/firebase';
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import axios from 'axios';

const db = getFirestore();

const getUsers = async () => {
  try {
    const res = await axios.get(`${URL}/users/user-data`);
    console.log(res.data.fields.username.stringValue);
  } catch (error) {
    console.log(error);
  }
};

const updateUsername = async (newName) => {
  try {
    await setDoc(doc(db, 'users', 'user-data'), {
      username: newName
    });
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  useEffect(() => {
    updateUsername('BEAN');
    getUsers();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
