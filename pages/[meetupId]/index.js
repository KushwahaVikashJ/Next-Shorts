import { MongoClient,ObjectId } from 'mongodb'
import MeetupDetails from '../../components/meetups/MeetupDetails';

export default function Details({meetupDetails}) {
    return (
        <MeetupDetails 
            image={meetupDetails.image} 
            title={meetupDetails.title}
            address={meetupDetails.address} 
            description={meetupDetails.description}
        />  
    )
}

// Required while using getStaticProps for dynamic render
export const getStaticPaths = async()=>{

    const client = await MongoClient.connect('mongodb+srv://vikash:vsam@@@1999@mern.yycrx.mongodb.net/nextShort?retryWrites=true&w=majority',{ useUnifiedTopology: true })
    const db = client.db(); //to setup the db

    const collection = db.collection('nextShort'); //fetch collection

    const result = await collection.find({},{_id:1}).toArray();

    client.close();

    return {
      fallback: 'blocking',  
      paths: result.map(res=>({
          params:{meetupId:res._id.toString()}
      }))
    }
}

// Runs on client side
export const getStaticProps = async(context)=>{
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://vikash:vsam@@@1999@mern.yycrx.mongodb.net/nextShort?retryWrites=true&w=majority',{ useUnifiedTopology: true })
    const db = client.db(); //to setup the db

    const collection = db.collection('nextShort'); //fetch collection

    const result = await collection.findOne({_id:ObjectId(meetupId)});

    client.close();

    return {
      props:{
        meetupDetails:{
            title:result.title,
            image:result.image,
            address:result.address,
            description:result.description,
            id:result._id.toString()
        }
      },
    }
}