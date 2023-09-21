import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header>
                <div> 
                    <Link   style={{textDecoration: 'none'}}to='/'>
                        Homepage
                    </Link>
                    <Link   style={{textDecoration: 'none'}}to='/add-blog'>
                        Add Blog
                    </Link>

                </div>
            </header>
        </div>
    )
}

export default Navbar