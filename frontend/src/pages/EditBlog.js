import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getBlog } from "../api/blog api/getBlog";
import { updateBlog } from "../api/blog api/updateBlog"
// import './EditBlog.css';

const EditBlog = () => {
    const { id } = useParams();
    const [blogUpdate, setBlogUpdate] = useState('');
    const [userInput, setUserInput] = useState('');
  

    const submitHandler = async () => {
        let obj = {
            _id: blogUpdate._id,
            title:"test",
            text:userInput,
            date:"test",
            image:"test"
            
        };
        let response = await updateBlog(obj);
        console.log(response);
        alert('edited item');
    };

    useEffect(() => {
        const fetchBlog = async () => {
            let data = await getBlog(id);
            setBlogUpdate(data);
        };
        fetchBlog();
    },[]);

    return (
          <div>
          <h1>Edit Blog</h1>
          <h2>{blogUpdate.text}</h2>
          <input
            className="input-field"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />

          <button className="button" onClick={submitHandler}>Submit</button>
          </div>
    );
};

export default EditBlog;