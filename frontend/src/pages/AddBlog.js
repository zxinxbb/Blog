import { useState } from "react"
import { addBlog } from "../api/blog api/addBlog"

const AddBlog = () => {
    const [userInput, setUserInput] = useState("")
    
    const handler = async (e) => {
        e.preventDefault()
        let response = await addBlog(userInput)
        console.log(response) 
    }

    return (
        <div>
            <h1>Add Blog</h1>
            <form onSubmit={handler}>
                <input
                type="text"
                 value={userInput}
                 onChange={(e) => {setUserInput(e.target.value)}}
                 />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBlog
