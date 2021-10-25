import React from 'react'
import styled from 'styled-components'
import background from "../assets/images/home/theme-color/grid.png"

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
                    <InnerContainer>
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
                    </InnerContainer>
                    <ColorContainer>
                        <ColorDiv className="green"></ColorDiv>
                        <ColorDiv className="blue"></ColorDiv>
                        <ColorDiv className="light-blue"></ColorDiv>
                        <ColorDiv className="dark-blue"></ColorDiv>
                        <ColorDiv className="orange"></ColorDiv>
                        <ColorDiv className="red"></ColorDiv>
                    </ColorContainer>
                </Bottom>
            </Wrapper>
        </MainContainer>
    )
}

const MainContainer = styled.div`
   
    padding: 30px 0;
`;
const Wrapper = styled.div``;
const Top = styled.div`
    text-align: center;
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
const Description = styled.p`
    font-size: 18px;
`;
const Bottom = styled.div`
    margin-bottom: 50%;
    background: url(${background}) no-repeat center;
    background-size: cover;
    z-index: 5;
    display: flex;
    justify-content: center;
`;
const InnerContainer = styled.div`
    position: relative;
    width: 90%;
`;
const ImageContainer1 = styled.div``;
const Image1 = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    z-index: 3;
`;
const ImageContainer2 = styled.div``;
const Image2 = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    z-index: 3;
`;
const ImageContainer3 = styled.div``;
const Image3 = styled.img`
    position: absolute;
    width: 100%;
    display: block;
   
`;
const ImageContainer4 = styled.div``;
const Image4 = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    z-index: 3;
`;
const ColorContainer = styled.div`
    width: 10%;
`;
const ColorDiv = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin:20px 0;
    cursor: pointer;
    
    &.green {
        background: #4eac56;
        position: relative;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #4eac56;
            border-radius: 50%;
            /* display: inline-block; */
            position: absolute;
            top: -8px;
            left: -8px;
            display: none;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
    &.blue {
        background: #7742dc;
        position: relative;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #7742dc;
            border-radius: 50%;
            /* display: inline-block; */
            position: absolute;
            top: -8px;
            left: -8px;
            display: none;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
    &.light-blue {
        background: #52caf9;
        position: relative;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #52caf9;
            border-radius: 50%;
            /* display: inline-block; */
            position: absolute;
            top: -8px;
            left: -8px;
            display: none;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
    &.dark-blue {
        background: #0b45f5;
        position: relative;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #0b45f5;
            border-radius: 50%;
            /* display: inline-block; */
            position: absolute;
            top: -8px;
            left: -8px;
            display: none;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
    &.orange {
        background: #f5a941;
        position: relative;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #f5a941;
            border-radius: 50%;
            /* display: inline-block; */
            position: absolute;
            top: -8px;
            left: -8px;
            display: none;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
    &.red {
        background: #ed3833;
        position: relative;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #ed3833;
            border-radius: 50%;
            /* display: inline-block; */
            position: absolute;
            top: -8px;
            left: -8px;
            display: none;
        }
        &:hover {
            &::after {
                display: inline-block;
            }
        }
    }
`;


export default Theme
