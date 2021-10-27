import React, {useState} from 'react'
import styled from 'styled-components'
import background from "../assets/images/home/theme-color/grid.png"

function Theme() {
    const [colr, setColr] = useState("default");
    const toggleGreen = () => {
        setColr("default");
    }
    const toggleRed = () => {
        setColr("red");
    }
    const toggleBlue = () => {
        setColr("blue");
    }
    const toggleCyan = () => {
        setColr("cyan");
    }
    const togglePurple = () => {
        setColr("purple");
    }
    const toggleOrange= () => {
        setColr("orange");
    }
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
                        <ImageContainer1 >
                            <Image1 src={require(`../assets/images/home/theme-color/block1-${colr}.png`).default} alt="Image1" />
                        </ImageContainer1>
                        <ImageContainer2 >
                            <Image2 src={require(`../assets/images/home/theme-color/block2-${colr}.png`).default} alt="Image2" />
                        </ImageContainer2>
                        <ImageContainer3 >
                            <Image3 src={require(`../assets/images/home/theme-color/screen-${colr}.png`).default} alt="Image3" />
                        </ImageContainer3>
                        <ImageContainer4 >
                            <Image4 src={require(`../assets/images/home/theme-color/sidebar-${colr}.png`).default} alt="Image4" />
                        </ImageContainer4>
                    </InnerContainer>
                    <ColorContainer>
                        <ColorDivContainer><ColorDiv className="green" colr={colr} onClick={()=>(toggleGreen() )}></ColorDiv></ColorDivContainer>
                        <ColorDivContainer><ColorDiv className="purple" colr={colr} onClick={()=>(togglePurple())}></ColorDiv></ColorDivContainer>
                        <ColorDivContainer><ColorDiv className="cyan" colr={colr}  onClick={toggleCyan}></ColorDiv></ColorDivContainer>
                        <ColorDivContainer><ColorDiv className="blue" colr={colr}  onClick={toggleBlue}></ColorDiv></ColorDivContainer>
                        <ColorDivContainer><ColorDiv className="orange" colr={colr} onClick={toggleOrange}></ColorDiv></ColorDivContainer>
                        <ColorDivContainer><ColorDiv className="red" colr={colr}  onClick={toggleRed}></ColorDiv></ColorDivContainer>  
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
    width: 100%;
`;
const ImageContainer1 = styled.div``;
const Image1 = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    z-index: 3;
    animation-name: updown;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;
const ImageContainer2 = styled.div``;
const Image2 = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    z-index: 3;
    animation-name: updown;
    animation-duration: 2s;
    animation-iteration-count: infinite;
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
    animation-name: updown;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;
const ColorContainer = styled.div`
    width: 10%;
`;
const ColorDivContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media all and (max-width:540px) {
        margin-right: 20px;
    }
`;
const ColorDiv = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 50%;
    cursor: pointer;
    &.green {
        background: #4eac56;
        position: relative;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #4eac56;
            border-radius: 50%;
            position: absolute;
            top: -6px;
            left: -6px;
            display: ${({colr})=> (colr == "default") ? 'block' : 'none'};
        }
        /* &:hover {
            width: 14px;
            height: 14px;
            &::after {
                display: inline-block;
            }
        } */
    }
    &.blue {
        background: #0b45f5;
        position: relative;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #0b45f5;
            border-radius: 50%;
            position: absolute;
            top: -6px;
            left: -6px;
            display: ${({colr})=> (colr == "blue") ? 'block' : 'none'};
        }
        /* &:hover {
            width: 14px;
            height: 14px;
            &::after {
                display: inline-block;
            }
        } */
    }
    &.cyan {
        background: #52caf9;
        position: relative;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #52caf9;
            border-radius: 50%;
            position: absolute;
            top: -6px;
            left: -6px;
            display: ${({colr})=> (colr == "cyan") ? 'block' : 'none'};
        }
        /* &:hover {
            width: 14px;
            height: 14px;
            &::after {
                display: inline-block;
            }
        } */
    }
    &.purple {
        background: #7742dc;
        position: relative;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #7742dc;
            border-radius: 50%;
            position: absolute;
            top: -6px;
            left: -6px;
            display: ${({colr})=> (colr == "purple") ? 'block' : 'none'};
        }
        /* &:hover {
            width: 14px;
            height: 14px;
            &::after {
                display: inline-block;
            }
        } */
    }
    &.orange {
        background: #f5a941;
        position: relative;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #f5a941;
            border-radius: 50%;
            position: absolute;
            top: -6px;
            left: -6px;
            display: ${({colr})=> (colr == "orange") ? 'block' : 'none'};
        }
        /* &:hover {
            width: 14px;
            height: 14px;
            &::after {
                display: inline-block;
            }
        } */
    }
    &.red {
        background: #ed3833;
        position: relative;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            border: 3px solid #ed3833;
            border-radius: 50%;
            position: absolute;
            top: -6px;
            left: -6px;
            display: ${({colr})=> (colr == "red") ? 'block' : 'none'};
        }
        /* &:hover {
            width: 14px;
            height: 14px;
            &::after {
                display: inline-block;
            }
        } */
    }
`;


export default Theme
