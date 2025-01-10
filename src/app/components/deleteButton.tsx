
'use client'

type Props = {
  id: string;
  
}
const DeleteButton = ({id}:Props) =>{
  const del = ()=>{
    fetch('/api', {
      method: "DElETE",
      body: JSON.stringify({ id:id })
  })}

  return (
    <button 
    className="bg-blue-700 text-white border border-black rounded-md p-2 ml-2 h-[42px] mb-4" onClick={del}>
      Delete
    </button>
  )
}
export default DeleteButton
