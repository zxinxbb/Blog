import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="navbar">
                        <Link to="/">
                        My List
                        </Link>
                        <Link to="/add-blog">
                            Add Item
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar