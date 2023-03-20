import { getFirestore, collection, doc, setDoc, addDoc, updateDoc, getDocs } from 'firebase/firestore';

const COLLECTION_NAME = 'users';
const usersCollection = collection(getFirestore(), COLLECTION_NAME);

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

export const create_user = async (newUser: User): Promise<{ id: string }> => {
  try {
    const docRef = await addDoc(usersCollection, newUser);
    return { id: docRef.id };
  } catch (error) {
    console.log('Problem while creating user:', error);
  }
};

export const update_user = async (id: string, newUser: User) => {
  try {
    await updateDoc(doc(usersCollection, id), newUser);
    return { id };
  } catch (error) {
    console.log('Problem while updating user:', error);
  }
};

export const all_users = async () => {
  try {
    const querySnapshot = await getDocs(usersCollection);
    const users: User[] = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() } as User);
    });
    return users;
  } 
  catch (error) {
    console.log('Problem while retrieving all users:', error);
  }
};