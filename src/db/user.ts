//define collection name
const COLLECTION_NAME = 'users';

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
export const all = async () => {};

// TODO: implement create
export const create = async (newUser: User) => {};

// TODO: update Todo :
export const update = async (id: string, newUser: User) => {};
