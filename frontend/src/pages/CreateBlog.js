import { useState } from "react"
import { addBlog } from "../api/blog api/addBlog"
import { useAuth0 } from '@auth0/auth0-react'

const CreateBlog = () => {
    const {user} = useAuth0()
    console.log(user)
    const userEmail = user.email
    const userName = user.nickname
    console.log(userEmail)
    const [userInput, setUserInput] = useState({
        title:"",
        text:"",
        date:"",
        image:"",
        email:userEmail,
        username:"Posted by" + userName
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
            <h1 style={{ margin: '0px 50' }}>Add Blog</h1> {/* Inline style to reduce the space */}
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="big-input" /* Applying the big-input class for a larger title input box */
                    type="text"
                    name="title"
                    value={userInput.title}
                    onChange={handler}
                    placeholder="Blog Title"
                />
                <textarea
                    className="textarea"
                    name="text"
                    value={userInput.text}
                    onChange={handler}
                    placeholder="Blog Text"
                />
                <input

                    className="big-input" /* Applying the big-input class for a larger image URL input box */
                    type="text"
                    name="image"
                    value={userInput.image}
                    onChange={handler}
                    placeholder="Image URL"
                />
                <button className="button" type="submit">Submit</button>

                className="big-input"
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
    );
}


export default CreateBlog;
