'use client'
import { useState } from "react"

export default function Front() {
  const [greeting, setGreeting] = useState("");
  const saveGreeting = ()=>{
    fetch('/api',{
      method:"POST", 
      //The client can only send strings to the server
      //so we need to change our whole object to a string
      body:JSON.stringify({greeting})
    })
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <input placeholder="Send greeting to server" className="bg-gray-50 py-4 px-4 border rounded-md border-black" value={greeting} onChange={(e)=>setGreeting(e.target.value)}/>
      <button className="bg-blue-700 text-white border rounded-md py-4 px-4 ml-2" onClick={saveGreeting}>Submit</button>
    </div>
  )
}