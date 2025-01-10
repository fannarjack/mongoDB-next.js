
import Front from '../front/page';
import Back from '../back/page';
import {MongoClient, ServerApiVersion} from 'mongodb'




const uri = "mongodb+srv://fannarjack:ReactReact@cluster0.18om8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Querying our database
    const cursor = await client.db("test").collection("greetings").find();
    const array = await cursor.toArray()
    return array;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
export default async function Database(){
  const greetings = await run();
  return (<>
    <div className='w-full flex-col flex items-center justify-center h-screen'>
      <button className="bg-blue-700 text-white border border-black rounded-md p-2   my-4 ">
        <a href="https://mongo-db-next-js-ten.vercel.app/api" target='_blank'>See The API</a>
      </button>
      <p>Or scroll down</p>
    </div>

    <Front></Front> 
    <div className='w-screen my-60 flex flex-col justify-center items-center '>
      {greetings.map(greetingobj=> 
      <>
      <h1 className='text-4xl font-bold px-4  rounded-lg shadow-lg my-4'>{greetingobj.greeting}</h1>
      </>
      )}
      
      
      <Back></Back>
    </div>
  </>)
}

