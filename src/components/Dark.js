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
    background-color: #161c24;
    @media all and (max-width:1080px) {
        margin-top: 100px;
    }
    @media all and (max-width:980px) {
        height: 600px;
    }
    @media all and (max-width:480px) {
        height: unset;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:980px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media all and (max-width:980px) {
        margin-top: 40px;
    }
    @media all and (max-width:480px) {
        display: none;
    }
`;
const ImageContainer1 = styled.div`
    width: 500px;
    position: absolute;
    left: 0px;
    top: -230px;
    @media all and (max-width:1080px) {
        width: 500px;
        left: 20px;
    }
    @media all and (max-width:980px) {
        top: 150px;
    }
    @media all and (max-width:768px) {
        left: -40px;
        width: 500px;
    }
    @media all and (max-width:640px) {
       width: 400px;
    }
    @media all and (max-width:540px) {
        width: 350px;
    }
`;
const Image1 = styled.img`
    width: 100%;
    display: block;
`;
const ImageContainer2 = styled.div`
    width: 500px;
    position: absolute;
    left: 100px;
    top: -150px;
    @media all and (max-width:1080px) {
        width: 500px;
        top: -100px;
        left: 60px;
    }
    @media all and (max-width:980px) {
        top: 200px;
    }
    @media all and (max-width:768px) {
        left: -80px;
        width: 500px;
    }
    @media all and (max-width:640px) {
       width: 400px;
       left: 0px;
    }
    @media all and (max-width:540px) {
        width: 350px;
    }
`;
const Image2 = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div`
    width: 30%;
    margin-top: 200px;
    padding-bottom: 200px;
    @media all and (max-width:1080px) {
        margin-top: 200px;
    }
    @media all and (max-width:980px) {
        width: 80%;
        text-align: center;
        margin: 0  auto;
    }
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
