import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Card = ({ blog, deleteHandler }) => {
  const newDate = blog.date.substring(0, 10);
  const { isAuthenticated, user } = useAuth0(); // Get user information and authentication status

  // Check if the blog's email matches the user's email
  const isUserBlog = isAuthenticated && blog.email === user.email;

  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <p>{blog.text}</p>
      <img src={blog.image} alt={blog.title} width="25%" />
      <footer>{newDate}</footer>

      {isUserBlog && ( // Conditionally render buttons if it's the user's blog
        <>
        <div className="btn-container">
          <button className="delete-btn" onClick={() => deleteHandler(blog)}>Delete</button>
          <Link className="edit-btn" to={`/${blog._id}`}>Edit Blog</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;