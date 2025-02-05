import './Footer.css';

function Navbar() {
  return (
    <div className="footer-container">
        <div className="footer">
            <div>
                <p>Associazione Coro Tersicore</p>
                <p>c/o Gianluca D’Ettorre</p>
                <p>via Brentani 9</p>
                <p>6900 Lugano</p>
            </div>

            <div>
                <a href="mailto:info@tersicore.ch" type="email">info@tersicore.ch</a>

                <a href="+41919711375" type="phone">+41 91 971 13 75</a>
            </div>

            <div>
                <a href="https://www.facebook.com/CORO-TERSICORE-Lugano-381826281882584" target="_blank">Pagina Facebook</a>
                <a href="https://www.youtube.com/channel/UCrO2CbPTXWypWYg1gYmiXWA" target="_blank">Canale Youtube</a>
            </div>
        </div>
    </div>
  );
}

export default Navbar;