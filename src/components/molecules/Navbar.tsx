import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className='logo'>
            <h1>AR SHAKIR</h1>
        </div>

        <div className='nav-links'>
            <ul>
                <li>Product</li>
                <li>Template</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className='user-actions'>
        <button>Sign In</button>
        <button>Start Free</button>
        </div>
        
    </div>
  )
}

export default Navbar