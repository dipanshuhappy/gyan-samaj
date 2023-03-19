import { firestore } from 'firebase';

const COLLECTION_POST = 'posts';
const postsCollection = firestore().collection(COLLECTION_POST);


export type Post = {
    PostId : string,
    // UserId : string,
    Files : string[],
    title : string,
    summary : string
}


export const create_post = async (newPost: Post) => {

  try {
    const docRef = await postsCollection.add(newPost);
    return { id: docRef.id };
  } 
  
  catch (error) {
    console.log('Error creating post:', error);
  }
};


export const all_posts = async () => {

    try {
        const get_posts = await postsCollection.get();
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
