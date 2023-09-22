import { useState } from "react"
import { createUser } from "../api/usersApi/createUser"

const CreateUser = () => {
    const [userInput, setUserInput] = useState({
        firstname:"",
        surname:"",
        email:"",
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
                name="firstname"
                 value={userInput.firstname}
                 onChange={handler}
                 placeholder="First Name"
                 />
                 <h2>Surname</h2>
                <input
                type="text"
                name="surname"
                 value={userInput.surname}
                 onChange={handler}
                 placeholder="Surname"
                 />
                 <h2>Email Address</h2>
                  <input
                type="text"
                name="email"
                 value={userInput.email}
                 onChange={handler}
                 placeholder="Email Address"
                 />
                 <h2>Create a Username</h2>
                  <input
                type="text"
                name="username"
                 value={userInput.username}
                 onChange={handler}
                 placeholder="Type your Username in here"
                 />
                 <h2>Create a Password</h2>
                 <input
                type="text"
                name="password"
                 value={userInput.password}
                 onChange={handler}
                 placeholder="Type your Password in here"
                 />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser