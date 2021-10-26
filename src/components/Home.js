import React,{useState, useEffect} from 'react'
import Header from './Header'
import Spotlight from './Spotlight'
import styled from 'styled-components'
import background from '../assets/images/overlay.svg'
import About from './About'
import StarterKit from './StarterKit'
import Dark from './Dark'
import Theme from './Theme'
import UserInterface from './UserInterface'
import Plan from './Plan'
import Contact from './Contact'
import Purchase from './Purchase'
import Footer from './Footer'
function Home() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }
    return (
        <>
        <Overlay open={open}  onClick={toggle}></Overlay>
        <MainContainer open={open}>
            <MenuIcon onClick={toggle}>
                <MenuImage src = {require("../assets/images/icons/menu-icon.png").default} alt="hamburger" />
            </MenuIcon>
            <Header />
            <Spotlight />
        </MainContainer>
        <SideMenu open={open}>
            <ListItems>
                <ListItem>
                    <Logo src = {require('../assets/images/brand/logo_single.svg').default} alt="Logo" />
                </ListItem>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Components
                </ListItem>
                <ListItem>
                    Pages
                </ListItem>
                <ListItem>
                    Documentation
                </ListItem>
            </ListItems>
        </SideMenu>
        <About />
        <StarterKit />
        <Dark />
        <Theme />
        <UserInterface />
        <Plan />
        <Contact />
        <Purchase />
        <Footer />
        </>
    )
}
const Overlay = styled.div`
    background: #5e5e5e;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0.7;
    display: ${({open})=>open ? 'block' : 'none'};
    margin-right: auto;

`;
const MainContainer = styled.div`
    background-image: url(${background}); 
    background-size: cover;
    overflow: ${({open})=> open ? 'hidden' : 'unset'};
`;
const MenuIcon = styled.div`
    width: 30px;
    position: absolute;
    right: 20px;
    top: 10px;
    display: none;
    z-index: 1005;
    @media  all and (max-width:640px) {
        display: block;
        position: fixed;
    }
`;
const MenuImage = styled.img`
    width: 100%;
    display: block;
`;
const SideMenu = styled.div`
    position: absolute;
    height: 100vh;
    width: 35%;
    z-index: 1005;
    top: 0;
    background: #333;
    position: fixed;
    left: ${({open})=> open ? '0' : '-1000px'};
    transition: all 0.5s ease;
    padding: 50px 20px;
`;
const ListItems = styled.ul``;
const ListItem = styled.li`
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    &:first-child {
        width: 50px;
    }
`;
const Logo = styled.img`
    width: 100%;
    display: block;
`;
export default Home
