export class Journey {
  public imageUrl: string;
  public location: string;
  public description: string;
  public likes: number;
  public createdOn: string;

  constructor(
    imageUrl: string,
    location: string,
    desc: string,
    createdOn: string,
    likes: number
  ) {
    this.imageUrl = imageUrl;

    this.location = location;
    this.description = desc;
    this.createdOn = createdOn;

    this.likes = likes;
  }
}
