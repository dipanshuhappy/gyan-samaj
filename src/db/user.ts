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


// TODO: implement all here

export const all_users = async () => {
  try {
    const get_users = await usersCollection.get();
    const users: User[] = [];
    get_users.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() } as User);
    });
    return users;
  } 
  catch (error) {
    console.log('Problem while retrieving all users:', error);
  }
};


// TODO: implement create
export const create = async (newUser: User) => {
  try {
    const docRef = await usersCollection.add(newUser);
    return { id: docRef.id };
  } catch (error) {
    console.log('Problem while creating user:', error);
  }
};

// TODO: update Todo :
export const update = async (id: string, newUser: User) => {
  try {
    await usersCollection.doc(id).update(newUser);
    return { id };
  } catch (error) {
    console.log('Problem while updating user:', error);
  }
};


