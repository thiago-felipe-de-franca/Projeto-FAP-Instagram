import {v4 as randomUUID} from "uuid"
import {faker} from "@faker-js/faker"

class Post {
  private _id: string = randomUUID()
  private _userName: string;
  private _imageUrl: string;
  private _avatarUrl: string;
  private _description: string;
  private _isLiked: boolean = false;
  private _numberOfLikes: number = 0;
  private _createdAt: Date = new Date()

  constructor(
    userName: string,
    avatarUrl: string, 
    imageUrl: string, 
    description: string
  ) {
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._description = description;
    this._avatarUrl = avatarUrl;
  }

  like(){
    this._isLiked = !this._isLiked

    if (this._isLiked == true) {
      this._numberOfLikes++
    } else {
      this._numberOfLikes--
    }
  }
}


const posts: Post[] = []

for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName(), 
    faker.image.avatarGitHub(), 
    faker.image.urlPicsumPhotos(), 
    faker.lorem.paragraph()
  )
  posts.push(post)
}
console.log("testando")
// console.log(posts)

// const firstPost = posts[0]

// firstPost.like()
// console.log(firstPost)
// firstPost.like()
// console.log(firstPost)
