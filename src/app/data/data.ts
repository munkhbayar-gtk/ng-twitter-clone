export interface Tweet {
  id: number,
  text: string,
  date: Date,
  type: string, //tweet, retweet
  retweet_id: number,
  liked: boolean,

  retweet_count: number,
  reply_count: number,
  like_count: number,

  twitter: Twitter
}

export interface Twitter {
  id: number,
  name: string,
  uid: string,
  img: string
}
