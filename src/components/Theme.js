import React from 'react'
import styled from 'styled-components'

function Theme() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <Top>
                    <SubHeading>CHOOSE YOUR STYLE</SubHeading>
                    <Heading>Theme Color</Heading>
                    <Description>Express your own style with just one click.</Description>
                </Top>
                <Bottom>
                    <ImageContainer1>
                        <Image1 src={require("../assets/images/home/theme-color/block1-default.png").default} alt="Image1" />
                    </ImageContainer1>
                    <ImageContainer2>
                        <Image2 src={require("../assets/images/home/theme-color/block2-default.png").default} alt="Image2" />
                    </ImageContainer2>
                    <ImageContainer3>
                        <Image3 src={require("../assets/images/home/theme-color/screen-default.png").default} alt="Image3" />
                    </ImageContainer3>
                    <ImageContainer4>
                        <Image4 src={require("../assets/images/home/theme-color/sidebar-default.png").default} alt="Image4" />
                    </ImageContainer4>
                </Bottom>
            </Wrapper>
        </MainContainer>
    )
}

const MainContainer = styled.div``;
const Wrapper = styled.div``;
const Top = styled.div``;
const SubHeading = styled.h5``;
const Heading = styled.h3``;
const Description = styled.p``;
const Bottom = styled.div``;
const ImageContainer1 = styled.div``;
const Image1 = styled.img``;
const ImageContainer2 = styled.div``;
const Image2 = styled.img``;
const ImageContainer3 = styled.div``;
const Image3 = styled.img``;
const ImageContainer4 = styled.div``;
const Image4 = styled.img``;
const MainContainer = styled.div``;


export default Theme
