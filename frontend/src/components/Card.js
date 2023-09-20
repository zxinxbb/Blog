import { Link } from "react-router-dom"

const Card = ({ blog, deleteHandler }) => {

    return (
        <div>
            <h3>
                {blog.text}
            </h3>
            <button onClick={() => deleteHandler(blog)}>Delete</button>
            <Link
                to={`/${blog._id}`}
                >
                    Edit It
                </Link>
        </div>
    )
}

export default Card