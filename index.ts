import { faker } from '@faker-js/faker'

class Post {
    private _userName: string;
    private _imageUrl: string;
    private _description: string;
    private _numLikes: number;
    private uuid: string;
  
    constructor(userName: string, imageUrl: string, description: string) {
      this._userName = userName;
      this._imageUrl = imageUrl;
      this._description = description;
      this._numLikes = 0;
    }
  
    get userName() {
      return this._userName;
    }
  
    get imageUrl() {
      return this._imageUrl;
    }
  
    get description() {
      return this._description;
    }
  
    set description(description: string) {
      this._description = description;
    }
  
    get numLikes() {
      return this._numLikes;
    }
  
    incrementLike() {
      this._numLikes += 1;
    }
  }
  
const post1 = new Post("augustocesar", "http://...", "Imagem 1");
console.log(post1);

function gerarPosts(quantidade: number) {
  const posts: Post[] = []

  for (let index = 0; index < quantidade; index++) {
    let postArray = new Post(faker.person.firstName(),faker.internet.url(),faker.image.avatar())
    posts.push(postArray)
  }
  return posts
}

console.log(gerarPosts(15))
