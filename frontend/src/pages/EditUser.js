import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getUser } from "../api/getUser";
import { updateUser } from "../api/updateUser";
import './EditUser.css';

const EditUser = () => {
    const { id } = useParams();
    const [useUpdate, setUseUpdate] = useState('');
    const [userInput, setUserInput] = useState('');

    const submitHandler = async () => {
        let obj = {
            _id: useUpdate._id,
            username: userInput,
            password: userInput,
            email: userInput
        };
        let response = await updateUser(obj);
        console.log(response);
        alert('edited item');
    };

    useEffect(() => {
        const fetchUser = async () => {
            let data = await getUser(id);
            setUseUpdate(data);
        };
        fetchUser();
    },[]);

    return (
          <div>
          <h1 className="title">Edit</h1>
          <h2>{useUpdate.text}</h2>
          <input
            className="input-field"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
          <button className="button" onClick={submitHandler}>Submit</button>
          </div>
    );
};

export default EditUser;
