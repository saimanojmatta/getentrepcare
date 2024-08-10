import { useState } from 'react'
import LogoWhite from '../../assets/logo-white.png'
import HamburgerMenuImg from '../../assets/hamburger.svg'
import CloseSvg from '../../assets/close.svg'

import { Container, LogoHolder, NavigationMenus, Cta, Button, HamburgerTriggerContainer, HamburgerTriggerLogoHolder, HamburgerMenu, MobileLogoHolder, MobileNavigationMenus, MobileCta, CloseImg } from "./index.styled"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()
    return <Container open={open}>
        <LogoHolder onClick={()=>{
            setOpen(false);
            navigate("/")}}>
            <img  src={LogoWhite}/>
        </LogoHolder>

        <NavigationMenus>
            <ul>
                <li>Media Mentions</li>
                <li>Explore CSR Engagement</li>
                <li>Want to train our AI models?</li>
                <li>Explore Event Sponsorship</li>
            </ul>
        </NavigationMenus>

        {/* <Cta>
            <Button onClick={()=>{
                setOpen(false); 
                navigate("/diagnostic-test")}}>Entrepreneurial Psychoanalytic Assessment™</Button>
        </Cta> */}

        <HamburgerTriggerContainer open={open}>
            <HamburgerTriggerLogoHolder onClick={()=>{
                setOpen(false); 
                navigate("/")}}>
                <img  src={LogoWhite}/>
            </HamburgerTriggerLogoHolder>

            <img src={HamburgerMenuImg} width={44} onClick={() => setOpen(!open)}/>
        </HamburgerTriggerContainer>

        <CloseImg open={open} src={CloseSvg} width={30} onClick={() => setOpen(!open)}/>

        {
            open && <HamburgerMenu open={open}>

                <MobileLogoHolder>
                    <img  src={LogoWhite}/>
                </MobileLogoHolder>

                <MobileNavigationMenus>
                    <ul>
                        <li>Media Mentions</li>
                        <li>CSR Collaboration</li>
                        <li>Want to train our AI models?</li>
                    </ul>
                </MobileNavigationMenus>

                <MobileCta>
                    <button onClick={()=>{
                setOpen(false); 
                navigate("/diagnostic-test")}}>Entrepreneurial Psychoanalytic Assessment™</button>
                </MobileCta>
            </HamburgerMenu>
        }
    </Container>
}

export default NavBar