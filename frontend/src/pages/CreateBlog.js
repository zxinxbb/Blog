import { useState } from "react"
import { addBlog } from "../api/blog api/addBlog"

const AddBlog = () => {
    const [userInput, setUserInput] = useState({
        title:"",
        text:"",
        date:"",
        image:""
    })
    
    const handler = async (e) => {
       
        const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    })
        /* let response = await addBlog(userInput)
        console.log(response)  */
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await addBlog(userInput);
      console.log(response);

    }
    return (
        <div className="container">
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={userInput.title}
                    onChange={handler}
                    placeholder="Blog Title"
                />
                <input
                    type="text"
                    name="text"
                    value={userInput.text}
                    onChange={handler}
                    placeholder="Blog Text"
                />
                <input
                    type="text"
                    name="image"
                    value={userInput.image}
                    onChange={handler}
                    placeholder="Image URL"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBlog;
    