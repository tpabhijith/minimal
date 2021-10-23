import React from 'react'
import styled from 'styled-components'
import background from '../assets/images/home/shape.svg'

function Dark() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <Left>
                    <ImageContainer1>
                        <Image1 src={require("../assets/images/home/lightmode.png").default} alt="Image1" />
                    </ImageContainer1>
                    <ImageContainer2>
                        <Image2 src={require("../assets/images/home/darkmode.png").default} alt="Image2" />
                    </ImageContainer2>
                </Left>
                <Right>
                    <SubHeading>EASY SWITCH BETWEEN STYLES.</SubHeading>
                    <Heading>Dark Mode</Heading>
                    <Description>A dark theme that feels easier on the eyes.</Description>
                </Right>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    margin-top: 350px; 
    background:url(${background}) no-repeat right;
    background-size: contain;
    height: 600px;
    background-color: #161c24;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImageContainer1 = styled.div`
    width: 700px;
    position: relative;
`;
const Image1 = styled.img`
    width: 100%;
    display: block;
    position: absolute;
    left: 140px;
`;
const ImageContainer2 = styled.div`
    width: 700px;
    position: relative;
`;
const Image2 = styled.img`
    width: 100%;
    display: block;
    position: absolute;
    left: -250px;
`;
const Right = styled.div`
    width: 30%;
    margin-top: 280px;
`;
const SubHeading = styled.h5`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #818d9a;
`;
const Heading = styled.h3`
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
`;
const Description = styled.p`
    font-size: 18px;
    color: #fff;
`;

export default Dark
