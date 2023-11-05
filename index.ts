import axios from "axios";


const url = "https://jsonplaceholder.typicode.com/posts/1";

interface Todo {
  userId: number
  id: number,
  title: string,

}

axios.get(url).then(response => {
  const result = response.data as Todo

  const userId = result.userId;

  const id = result.id;

  const title = result.title;

  logFunc(userId, id, title)

})

const logFunc = (userId: number, id: number, title: string) => {
  console.log(`
  ${userId}- ${id} - ${title}
`)
}

