import React from 'react'
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
    return (
        <>
        <MainContainer>
            <Header />
            <Spotlight />
        </MainContainer>
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
const MainContainer = styled.div`
    background-image: url(${background}); 
    background-size: cover;
    
`;

export default Home
