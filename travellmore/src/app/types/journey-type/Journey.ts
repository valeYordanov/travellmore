export interface Journey {
  title: string;
  desc: string;
  author: string;
  date: string;
  img:string
  content: string;
  id?:string
  ownerId?:string | undefined
  
}
