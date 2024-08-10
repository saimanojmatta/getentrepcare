import { Container, Left, Right, ImageContainer, Wrapper } from "./index.styled"
import { Marginer } from "../../globalStyles"
import LinkedinIcon from "../../../src/assets/linkedin.png"

const What = () => {
    return <Container id="whatis">
        <Marginer className="current-container">
            
            {/* <h1>3 main modules of GetEntrepCare</h1> */}
            <Wrapper>
                <Left>
                    <ImageContainer>

                    </ImageContainer>
                </Left>

                <Right>
                    <h1>Founding Team Story</h1>
                    <p>“ Serial entrepreneurs from IITs and IIMs, with experiences in Exits, Failures, Successful Fundraising, and building large Organizations, partnered with top Organizational Development Specialists, Organizational Psychologists, and Business Coaches to establish the foundation of GetEntrepCare AI “</p>
                    <div className="social-media">
                        <div onClick={()=>window.open("https://www.linkedin.com/in/sumedh-singh?utm_source=share&utm_campaign=share_via&utm_content=profile")}>
                            <img src={LinkedinIcon}/>Sumedh Singh, IIT KGP, Psychotherapist
                        </div>

                        <div onClick={()=>window.open("https://www.linkedin.com/in/deepthi-nathala-3b386524?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}>
                        <img src={LinkedinIcon}/>Deepthi Nathala, IIT Madras, Serial Entrepreneur
                        </div>
                    </div>

                    {/* <p>“ IITians turned Psychologists “</p> */}
                </Right>
            </Wrapper>
        </Marginer>
    </Container>
}

export default What