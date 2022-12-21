import React from "react";
import './fotter.scss'




const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Test App</h1>

          <h2>Contactanos</h2>

          {/* <address>
      5534 Somewhere In. The World 22193-10212<br>
          
      <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address> */}
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternativa Ads</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Tecnologias</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Diseño Hardware </a>
              </li>

              <li>
                <a href="#">Diseño de Software </a>
              </li>

              <li>
                <a href="#">Señalizacion Digital</a>
              </li>

              <li>
                <a href="#">Automatización</a>
              </li>

              <li>
                <a href="#">Inteligencia Artificial </a>
              </li>

              <li>
                <a href="#">IoT</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2022 Leo Zeron. todos los Derechos reservados.</p>

          <div className="legal__links">
            <span>Hecho con <span className="heart">♥</span>Remotamente desde donde sea </span>
          </div>
        </div>
      </footer>

    </>
  )


}




export default Footer