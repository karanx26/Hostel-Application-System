import '../styles/indexheader.css'

function IndexHeader() {
    return (
        <div id='iheader-wrapper'>
            <header>
                <div id="iheader">
                    <h1>Hostel Application System</h1>
                </div>
                <ul id="imenu">
                    <li><a href="#about-wrapper">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                </ul>
            </header>
            <div id="welcomeText">
                <h1><strong>Welcome to PDEU Hostel</strong></h1>
                <p>
                    <button className="sliderBtn login"><a href="/login">Login</a></button>
                    <button className="sliderBtn signup"><a href="/signup">Signup</a></button>
                </p>
            </div>
        </div>
    );
}


export default IndexHeader;