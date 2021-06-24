import { MongoClient } from 'mongodb'
async function handler(req,res){
    if(req.method==="POST"){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://vikash:vsam@@@1999@mern.yycrx.mongodb.net/nextShort?retryWrites=true&w=majority')
        const db = client.db(); //to setup the db

        const collection = db.collection('nextShort'); //fetch collection

        const result = await collection.insertOne(data); //insert into collection
      
        client.close(); //close the db connection

        res.status(201).json({message:'Data inserted'});
    }
}

export default handler