import { useNavigate } from 'react-router-dom'
import '../styles/topnav.css'

function TopNav() {
    const navigate = useNavigate()
    const handleClick = async e=>{
        e.preventDefault()
        window.localStorage.removeItem("adminUser")
        window.localStorage.removeItem("isLoggedIn")
        window.localStorage.removeItem("userName")
        navigate("/")
      }
    return (
        <div id='top-wrapper'>
            <div id="topNav">
                <div className='loginSignup'>
                    <p>
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <a href="/" onClick={handleClick}>Signout</a>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default TopNav;