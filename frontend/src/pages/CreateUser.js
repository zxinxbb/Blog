import { useState } from "react"
import { createUser } from "../api/createUser"

const CreateUser = () => {
    const [userInput, setUserInput] = useState("")
    
    const handler = async (e) => {
        e.preventDefault()
        let response = await createUser(userInput)
        console.log(response) 
    }

    return (
        <div>
            <h1>Create User</h1>
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

export default CreateUser

//g