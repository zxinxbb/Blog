import { useState } from "react"
import { createUser } from "../api/usersApi/createUser"

const CreateUser = () => {
    const [userInput, setUserInput] = useState({
        firstName:"",
        surname:"",
        emailAddress:"",
        username:"",
        password:""
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
        const response = await createUser(userInput);
      console.log(response);

    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <h2>First Name</h2>
            <input
                type="text"
                name="First Name"
                 value={userInput.text}
                 onChange={handler}
                 placeholder="First Name"
                 />
                 <h2>Surname</h2>
                <input
                type="text"
                name="Surname"
                 value={userInput.text}
                 onChange={handler}
                 placeholder="Surname"
                 />
                 <h2>Email Address</h2>
                  <input
                type="text"
                name="Email Address"
                 value={userInput.text}
                 onChange={handler}
                 placeholder="Email Address"
                 />
                 <h2>Create a Username</h2>
                  <input
                type="text"
                name="Create a Username"
                 value={userInput.text}
                 onChange={handler}
                 placeholder="Type your Username in here"
                 />
                 <h2>Create a Password</h2>
                 <input
                type="text"
                name="Create a Password"
                 value={userInput.text}
                 onChange={handler}
                 placeholder="Type your Password in here"
                 />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser