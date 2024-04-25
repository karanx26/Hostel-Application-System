import "../styles/footer.css";
function Footer() {
    return (
        <div id="footer-wrapper">
            <div className="footer">
                <div className="social">
                    <button><a href="https://www.facebook.com/pdeuofficial/"><i class="fab fa-facebook-f"></i></a></button>
                    <button><a href="https://twitter.com/PdeuOfficial"><i class="fa-brands fa-twitter"></i></a></button>
                    <button><a href="https://www.instagram.com/pdeuofficial/"><i class="fa-brands fa-instagram"></i></a></button>              
                </div>
                <p>This website is developed by Karan & Nisargi.</p>
            </div>
        </div>
    );
}

export default Footer;