import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";
import { useAuth0 } from '@auth0/auth0-react'
const Homepage = () => {
    const [blogs, setBlogs] = useState([ ])
    const {user} = useAuth0()
    console.log(user.email)

    const deleteHandler = async (blog) => {
        let response = await deleteBlog(blog)
        console.log(response)
        let updated= [...blogs]
        updated = updated.filter(items=> items._id !== response._id)
        setBlogs(updated)
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            let data = await readBlogs()
            setBlogs(data.blogs)
            console.log(data.message)
            console.log(data)
        }
        fetchBlogs()
    }, [])
 
    if (!blogs) return <h1>loading...</h1>
    return (
        
        <div className="items">
            <>
                {
                    blogs ? blogs.map((blog) => <Card key={blogs._id} deleteHandler={deleteHandler} blog={blog}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
   
    );

}

export default Homepage