//since we are using TypeScript we need to declare our type first
import EditGreeting from "../components/editGreeting"


type Greeting = {
  greeting:string;
  _id: string;
}

export default async function Back() {
  const baseUrl = "https://mongo-db-next-js-ten.vercel.app"
  const response = await fetch(`${baseUrl}/api`)
  const greetings: Greeting[] = await response.json()
  return (
    <div className="w-screen h-screen flex-col flex items-center justify-center m-32 ">
      <div className="w-1/2 h-screen flex-col flex justify-center items-center ">
        {greetings.map(greetingObj=>
        <div className="flex items-end">
          <EditGreeting greetingObj={greetingObj} key={greetingObj._id.toString()} />
          
        </div>
        )}
      </div>
      
    </div>
  )
}