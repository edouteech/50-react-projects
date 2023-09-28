"use client"
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e:Event) => {
    e.preventDefault();
    if (newTask != "") {
      setTasks(prev => [...prev, newTask]);
      setNewTask('');
    }
  }

  const delTask = (i) => {
    const t = tasks.filter((_, index) => index !== i);
    console.log(t)
    setTasks(t)
  }

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className=' w-full h-screen bg-green-400'>

        <h2 className='text-2xl md:text-3xl lg:text-4xl text-yellow-900 pt-6 pb-10 text-center'>Welcome to my todo list</h2>
        <form className='mx-5 flex' onSubmit={addTask}>
          <input value={newTask} onChange={e => setNewTask(e.target.value)} className="border-1 border-rose-500 focus-visible:outline-none rounded-l  px-5 py-2 w-full" type="text" placeholder='Enter new task title' />
          <button type='submit' className='bg-sky-500 text-white px-5 py-2 rounded-r w-1/3'>Add Task</button>
        </form>
        <div className='flex flex-col-reverse items-start w-full pt-8'>
          {tasks.map(((task, index) => (
              <div key={index} className='text-xl text-white hover:bg-green-500 w-full border-b-2 flex justify-between'>
                <div className=' py-2 px-5'>{task}</div>
                
                <button className='px-2 bg-red-500 hover:bg-red-700' onClick={() =>delTask(index)}>Delete</button>
              </div>
          )))}
        </div>
      </div>
    </div>
  )
}
