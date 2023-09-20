import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getUsers } from "../api/usersApi/getUsers";
import { editUser} from "../api/usersApi/editUser"
// import './EditUser.css';

const EditUser = () => {
    const { id } = useParams();
    const [useUpdate, setUseUpdate] = useState('');
    const [userInput, setUserInput] = useState('');
    const [userInput2, setUserInput2] = useState('');
    const [userInput3, setUserInput3] = useState('');

    const submitHandler = async () => {
        let obj = {
            _id: useUpdate._id,
            username: userInput,
            password: userInput2,
            email: userInput3
        };
        let response = await editUser(obj);
        console.log(response);
        alert('edited item');
    };

    useEffect(() => {
        const fetchUser = async () => {
            let data = await getUsers(id);
            setUseUpdate(data);
        };
        fetchUser();
    },[]);

    return (
          <div>
          <h1>Edit</h1>
          <h2>{useUpdate.text}</h2>
          <h2>username</h2>
          <input
            className="input-field"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
          <br></br>
          <h2>password</h2>
                    <input
            className="input-field"
            onChange={(e) => setUserInput2(e.target.value)}
            value={userInput2}
          />
          <br></br>
          <h2>email</h2>
                    <input
            className="input-field"
            onChange={(e) => setUserInput3(e.target.value)}
            value={userInput3}
          />
          <button className="button" onClick={submitHandler}>Submit</button>
          </div>
    );
};

export default EditUser;
