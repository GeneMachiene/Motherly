
function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">

        {/* Dropdown Menu when size sm */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>FAQ’s</a></li>
            <li>
              <a>Contact Us</a>
              <ul className="p-2">
                <li><a>Email</a></li>
                <li className="p-4">+63 912 345 6789</li>
              </ul>
            </li>
            <li><a>Login</a></li>
            <li><a>Sign Up</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl">
          <img src="/logo.svg" alt="Motherly Logo" className="h-9 lg:h-6"/>
        </a>
      </div>

      {/* Menu items when size lg */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About Us</a></li>
          <li><a>FAQ’s</a></li>
          <li>
            <details>
              <summary>Contact Us</summary>
              <ul className="p-2">
                <li><a>Email</a></li>
                <li className="p-4">Phone: +63 912 345 6789</li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Action buttons */}
      <div className="navbar-end hidden lg:flex">
        <a className="btn btn-link text-purple-700">Sign Up</a>
        <a className="btn">Login</a>
      </div>
    </div>
  )
}

export default Header