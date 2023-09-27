import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Card = ({ blog, deleteHandler }) => {
  const newDate = blog.date.substring(0, 10);
  const { isAuthenticated, user } = useAuth0(); // Get user information and authentication status

  // Check if the blog's email matches the user's email
  const isUserBlog = isAuthenticated && blog.email === user.email;

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.text}</p>
      <img src={blog.image} alt={blog.title} width="25%" />
      <footer>{newDate}</footer>

      {isUserBlog && ( // Conditionally render buttons if it's the user's blog
        <>
          <button onClick={() => deleteHandler(blog)}>Delete</button>
          <Link to={`/${blog._id}`}>Edit Blog</Link>
        </>
      )}
    </div>
  );
};

export default Card;
