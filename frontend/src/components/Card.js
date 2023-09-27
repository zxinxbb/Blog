import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

const Card = ({ blog, deleteHandler }) => {
  const newDate = blog.date.substring(0, 10)
  const { isAuthenticated, user } = useAuth0()


  const isUserBlog = isAuthenticated && blog.email === user.email

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.text}</p>
      <img src={blog.image} alt={blog.title} width="25%" />
      <footer>{newDate} {blog.username}</footer>

      {isUserBlog && ( 
        <>
          <button onClick={() => deleteHandler(blog)}>Delete</button>
          <Link to={`/${blog._id}`}>Edit Blog</Link>
        </>
      )}
    </div>
  )
}

export default Card
