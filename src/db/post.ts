// import { firestore } from 'firebase';

import { collection, doc, setDoc, getDocs, getFirestore } from "firebase/firestore";
// import { firestore } from "firebase/app";



const COLLECTION_POST = 'posts';
const postsCollection = collection(getFirestore(), COLLECTION_POST);


export type Post = {
    PostId : string,
    Files : string[],
    title : string,
    summary : string
}


export const create_post = async (newPost: Post) => {

  try {
    const docRef = doc(postsCollection);
    await setDoc(docRef, newPost)
    return { id: docRef.id };
  } 
  
  catch (error) {
    console.log('Problem while creating post:', error);
  }
};


export const all_posts = async () => {

    try {
        const get_posts = await getDocs(postsCollection);
        const posts: Post[] = [];

        get_posts.forEach((doc) => {
            const data = doc.data();
            const each_post: Post = {
                PostId: doc.id,
                Files: data.Files,
                title: data.title,
                summary: data.summary
            };
            posts.push(each_post);
        })
        return posts;
    }
    catch(error) {
        console.log('Problem while retrieving all posts:', error);
    }
}
