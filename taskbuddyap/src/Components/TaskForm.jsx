import React, {useState} from 'react'

export default function TaskForm() {
  const [task, setTask] = useState('');
  return (
    <div>
        <form>
            <input type='text'
            placeholder='Enter your text'
            required
            value = {task}
            onChange={(e) => setTask(e.target.value)}/>

            <h1>{task}</h1>

        </form>
    </div>
  )
}
