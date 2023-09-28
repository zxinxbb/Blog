import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { loginWithRedirect, logout, user, isLoading } = useAuth0()

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

                <div>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        Homepage
                    </Link>
                    {user && (
                        <Link style={{ textDecoration: 'none' }} to='/add-blog'>
                            Add Blog
                        </Link>
                    )}

                    {!isLoading && !user && (
                        <button onClick={() => loginWithRedirect()}>
                            log in
                        </button>
                    )}
                    {!isLoading && user && (
                        <button onClick={() => logout()}>
                            log out
                        </button>
                    )}

                </div>
            </header>
        </div>
    )
}

export default Navbar;
