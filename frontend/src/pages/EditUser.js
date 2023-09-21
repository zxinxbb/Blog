import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getUsers } from "../api/usersApi/getUsers";
import { editUser} from "../api/usersApi/editUser"
// import './EditUser.css';

const EditUser = () => {
    const { id } = useParams()
    const [userUpdate, setUserUpdate] = useState({})
    const [userInput, setUserInput] = useState('')
    const [selectedField, setSelectedField] = useState('')
    const [original, setOriginal] = useState('')

    const submitHandler = async () => {
        if (selectedField) {
            const updatedUser = { ...userUpdate, [selectedField]: userInput }
            let response = await editUser(updatedUser)
            console.log(response)
            alert('Edited Profile')
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            let data = await getUsers(id)
            setUserUpdate(data)
            
            
            if (selectedField) {
                setOriginal(data[selectedField])
            }
        }
        fetchUser()
    }, [id, selectedField]) 

    
    useEffect(() => {
        if (selectedField) {
            setOriginal(userUpdate[selectedField])
        }
    }, [selectedField, userUpdate])

    return (
        <div>
            <h1>Edit User</h1>
            <h2>{original}</h2>

            <select onChange={(e) => setSelectedField(e.target.value)}>
                <option value="">Select Field to Edit</option>
                <option value="username">Username</option>
                <option value="password">Password</option>
                <option value="email">Email</option>
            </select>

            {selectedField && (
                <>
                    <input
                        className="input-field"
                        onChange={(e) => setUserInput(e.target.value)}
                        value={userInput}
                    />
                    <br></br>
                </>
            )}

            <button className="button" onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default EditUser