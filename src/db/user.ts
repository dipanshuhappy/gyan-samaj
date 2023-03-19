//define collection name
import { firestore } from 'firebase';

const COLLECTION_NAME = 'users';
const usersCollection = firestore().collection(COLLECTION_NAME);

export type InsituitionUniversityDetailType = {
  degree: string;
  year: number;
};
export type InsituitionSchoolDetailType = {
  class: string;
  stream: string;
};

export type User = {
  id?: string;
  email: string;
  name: string;
  insituition: string;
  insituitionDetail:
    | InsituitionSchoolDetailType
    | InsituitionUniversityDetailType;
  insituitionalEmail: string;
  subjects: string[];
};



// TODO: implement create
export const create = async (newUser: User) => {
  try {
    const docRef = await usersCollection.add(newUser);
    return { id: docRef.id };
  } catch (error) {
    console.log('Error creating user:', error);
  }
};

// TODO: update Todo :
export const update = async (id: string, newUser: User) => {
  try {
    await usersCollection.doc(id).update(newUser);
    return { id };
  } catch (error) {
    console.log('Error updating user:', error);
  }
};

