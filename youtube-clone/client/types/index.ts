export interface Video {
  __v: number;
  _id: string;
  videoId: string;
  title: string;
  description: string;
  extension: string;
  owner: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum QueryKeys {
  me = "me",
  videos = "videos",
}

export interface Me {
  _id: string;
  email: string;
  username: string;
}