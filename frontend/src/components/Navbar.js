import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className="navbar"> {/* Add this className */}
                    <Link className="nav-link" to='/'> {/* Add this className */}
                        Homepage
                    </Link>
                    <Link className="nav-link" to='/add-blog'> {/* Add this className */}
                        Add Blog
                    </Link>
                    <Link className="nav-link" to="/add-user"> {/* Add this className */}
                        Create Account
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
