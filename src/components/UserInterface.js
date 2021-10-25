import React from 'react'
import styled from 'styled-components'

function UserInterface() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <Left>
                    <SubHeading>CLEAN & CLEAR</SubHeading>
                    <Heading>Beautiful, modern and clean user interfaces</Heading>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-1.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-2.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-3.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-4.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-5.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-6.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-7.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-8.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-9.png").default} alt="Image1" />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={require("../assets/images/home/clean-10.png").default} alt="Image1" />
                    </ImageContainer>
                </Right>
            </Wrapper>
        </MainContainer> 
    )
}
const MainContainer = styled.div`
   margin-bottom: 60%;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;
const Left = styled.div`
    width: 35%;
    position: absolute;
`;
const SubHeading = styled.h5`
    font-size: 20px;
    color: #818d9a;
    font-weight: 500;
`;
const Heading = styled.h3`
    font-size: 44px;
    font-weight: 700;
`;
const Right = styled.div`
    position: relative;
    width: 90%;
`;
const ImageContainer10 = styled.div``;
const Image10 = styled.img`
    position: absolute;
    top: 0;
    left:0;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
    position: absolute;
    display: block;
    width: 100%;
`;
export default UserInterface
