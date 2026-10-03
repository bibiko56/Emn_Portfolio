import { useEffect, useRef } from 'react';

function Footer(){
    return <footer className="main-footer">
    <div className="footer-content">
        <div className="footer-top">
            <div className="footer-brand">
                <span className="brand-name">Emanuel Mosqueda</span>
                <span className="brand-tag">Designer & IT Student</span>
            </div>
            
            <div className="footer-links">
                <a href="https://www.instagram.com/3mnl.mp3/?hl=en" target="_blank" rel="noreferrer" className="f-link"><i className="fa-brands fa-instagram" aria-label="Instagram"></i></a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="f-link"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.facebook.com/emanuel.mosqueda.7503" className="f-link"><i className="fa-brands fa-facebook"></i></a>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>© 2026 Emanuel Mosqueda</p>
            <p className="location-stamp">Iloilo, Philippines</p>
        </div>
    </div>
</footer>
}

export default Footer;