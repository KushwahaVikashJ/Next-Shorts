import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

// const Dummy_Data = [
//   {
//     "id": 1,
//     "image": "https://media.timeout.com/images/105403910/630/472/image.jpg",
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "address": "Douglas Extension",
//     "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "id": 2,
//     "image": "https://media.timeout.com/images/105403910/630/472/image.jpg",
//     "title": "qui est esse",
//     "address": "Douglas Extension",
//     "description": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "id": 3,
//     "image": "https://media.timeout.com/images/105403910/630/472/image.jpg",
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "address": "Douglas Extension",
//     "description": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "id": 4,
//     "image": "https://media.timeout.com/images/105403910/630/472/image.jpg",
//     "title": "eum et est occaecati",
//     "address": "Douglas Extension",
//     "description": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
//   {
//     "id": 5,
//     "image": "https://media.timeout.com/images/105403910/630/472/image.jpg",
//     "title": "nesciunt quas odio",
//     "address": "Douglas Extension",
//     "description": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//   },
// ]

export default function Home({result}) {
  return <MeetupList meetups={result}/>
}

// Runs on server side
// export const getServerSideProps = async(context)=>{
// const req = context.req;
// const res = context.res;  
//   return {
//     props:{
//       Dummy_Data
//     }
//   }
// }

// Runs on client side
export const getStaticProps = async()=>{

  const client = await MongoClient.connect('mongodb+srv://vikash:vsam@@@1999@mern.yycrx.mongodb.net/nextShort?retryWrites=true&w=majority')
  const db = client.db(); //to setup the db

  const collection = db.collection('nextShort'); //fetch collection

  const result = await collection.find().toArray();

  client.close();

  return {
    props:{
      result:result.map(res=>({
        title:res.title,
        image:res.image,
        address:res.address,
        id:res._id.toString()
      }))
    }
  }
}