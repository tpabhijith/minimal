import React from 'react'
import Header from './Header'
import Spotlight from './Spotlight'
import styled from 'styled-components'
import background from '../assets/images/overlay.svg'
import About from './About'
import StarterKit from './StarterKit'
import Dark from './Dark'
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
        </>
    )
}
const MainContainer = styled.div`
    background-image: url(${background}); 
    
    
`;

export default Home
