import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { readBlogs } from "../api/blogApi/readBlogs";
import { updateBlog } from "../api/blogapi/updateBlog"
// import './EditBlog.css';

const EditBlog = () => {
    const { id } = useParams();
    const [blogUpdate, setBlogUpdate] = useState('');
    const [userInput, setUserInput] = useState('');
  

    const submitHandler = async () => {
        let obj = {
            _id: blogUpdate._id,
            text: userInput,

        };
        let response = await editBlog(obj);
        console.log(response);
        alert('edited item');
    };

    useEffect(() => {
        const fetchBlog = async () => {
            let data = await getBlogs(id);
            setBlogUpdate(data);
        };
        fetchBlog();
    },[]);

    return (
          <div>
          <h1>Edit</h1>
          <h2>{blogUpdate.text}</h2>
          <input
            className="input-field"
            onChange={(e) => setUserInput(e.target.value)}
            value={blogInput}
          />

          <button className="button" onClick={submitHandler}>Submit</button>
          </div>
    );
};

export default EditBlog;