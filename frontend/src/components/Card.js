import { Link } from "react-router-dom";

const Card = ({ blog, deleteHandler }) => {
  const newDate = blog.date.substring(0, 10);

  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.text}</p>

      <div className="btn-container">
        <button className="delete-btn" onClick={() => deleteHandler(blog)}>Delete</button>
        <Link className="edit-btn" to={`/${blog._id}`}>Edit Blog</Link>
      </div>
      <div className="app-footer">
        <footer>{newDate}</footer>
      </div>
    </div>
  )}


export default Card;
