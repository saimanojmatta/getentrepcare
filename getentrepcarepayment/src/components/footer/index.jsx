import { Container } from "./index.styled";
import { Marginer } from "../../globalStyles";
import LinkedinIcon from "../../../src/assets/linkedin.png"

const Footer = ({ setModalOpen }) => {
  return (
    <Container>
      <Marginer className="current-container">
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    {/* <a onClick={() => setModalOpen(true)}>contact us</a> */}
                    <a href="#contact">contact us</a>
                  </li>
                  {/* <li>
                    <a href="#" >privacy policy</a>
                  </li>
                  <li>
                    <a href="#">terms and condition</a>
                  </li> */}
                </ul>
              </div>
              <div class="footer-col">
                <h4>get help</h4>
                <ul>
                  {/* <li disabled>
                    <a href="#our-story">our story</a>
                  </li> */}
                  <li>
                    <a href="#whatis">What is GetEntrepCare</a>
                  </li>
                  <li>
                    <a href="#finance">Finance Mastery</a>
                  </li>
                  <li>
                    <a href="#leadership">Leadership & Development</a>
                  </li>
                  <li>
                    <a href="#relation">Relational Excellence</a>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/deepthi-nathala-3b386524?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    <img src={LinkedinIcon} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sumedh-singh?utm_source=share&utm_campaign=share_via&utm_content=profile"
                  >
                    <img src={LinkedinIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Marginer>
    </Container>
  );
};

export default Footer;
