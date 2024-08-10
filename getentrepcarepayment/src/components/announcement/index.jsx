import { Container, Email, Phone, LogoHolder, Contact, MarqueeContainer } from "./index.styled"
import { Marginer } from "../../globalStyles"

import PhoneSVG from '../../assets/phone.svg'
import EmailSVG from '../../assets/email.svg'

const Announcement = () => {
    return <Container>
        <Marginer className="current-container">
            <MarqueeContainer>
            <marquee>
                Morning Walk and Breakfast with Entrepreneurs on August 11th 2024 at KBR park, Hyderabad
            </marquee>
            </MarqueeContainer>
            <Contact>
                <Email>
                    <img src={EmailSVG} width={20}/>
                    <p>hello@getentrepcare.com</p>
                </Email>


                <Phone id="contact">
                    <img src={PhoneSVG} width={20}/>
                    <p>(+91) 90023 30471</p>
                </Phone>
            </Contact>
        </Marginer>
    </Container>
}

export default Announcement