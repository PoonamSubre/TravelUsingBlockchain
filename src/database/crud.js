// crud.js
import { db } from '../Pages/firebase';
import { collection, addDoc } from 'firebase/firestore';

console.log(db); // Ensure db is properly initialized

export const addTourPackage = async (name, description, price) => {
  try {
    const docRef = await addDoc(collection(db, "tourPackages"), {
      name: name,
      description: description,
      price: price
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Return the document ID if needed
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}

// Similarly, define functions for get, update, and delete operations
