'use client'
import { useState } from 'react'
import DeleteButton from './deleteButton'

type Props = {
  greetingObj: {
    _id: string;
    greeting: string;
  }
}

const EditGreeting = ({greetingObj}:Props) =>{
  const [greeting, setGreeting] = useState("");
  const changeGreeting = ()=>{
    fetch('/api', {
      method: "PUT",
      body: JSON.stringify({ greeting, id:greetingObj._id })
    })
  }
  return (
    <div className='' key={greetingObj._id.toString()}>
      <h1 className='text-4xl font-bold px-4  rounded-lg shadow-lg'>{greetingObj.greeting}</h1>
      <input 
        placeholder='Change Greeting above'
        className=' mb-4 p-2 border  border-black rounded-sm'
        value={greeting}
        onChange={(e) =>setGreeting(e.target.value)}>
      </input>
      <button 
        className='bg-blue-700 text-white border border-black rounded-md p-2 ml-2'
        onClick={changeGreeting}>
          Submit
      </button>
      <DeleteButton id={greetingObj._id}/>
    </div>
  )
}
export default EditGreeting