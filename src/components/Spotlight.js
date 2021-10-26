import React from 'react'
import styled from 'styled-components'

function Spotlight() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <Left>
                    <Heading>Start a <br /> new project with <Color>Minimal</Color></Heading>
                    <Description>The starting point for next project based on easy-to-customize Material-UI &copy; helps you build apps faster and better</Description>
                    <LinkContent>
                        <DiamondIcon src={require("../assets/images/home/ic_sketch_small.svg").default} alt="Diamond icon" />
                        <LinkSpan>Preview in sketch cloud</LinkSpan>
                    </LinkContent>
                    <PreviewButton>Live Preview</PreviewButton>
                    <ListItems>
                        <ListItem>
                            <ListItemLogo src={require("../assets/images/home/ic_sketch.svg").default} alt="Diamond Button" />
                        </ListItem>
                        <ListItem>
                            <ListItemLogo src={require("../assets/images/home/ic_figma.svg").default} alt="Figma Button" />
                        </ListItem>
                        <ListItem>
                            <ListItemLogo src={require("../assets/images/home/ic_material.svg").default} alt="Material Button" />
                        </ListItem>
                        <ListItem>
                            <ListItemLogo src={require("../assets/images/home/ic_react.svg").default} alt="React Button" />
                        </ListItem>
                        <ListItem>
                            <ListItemLogo src={require("../assets/images/home/ic_js.svg").default} alt="JavaScript Button" />
                        </ListItem>
                        <ListItem>
                            <ListItemLogo src={require("../assets/images/home/ic_ts.svg").default} alt="TS Button" />
                        </ListItem>
                    </ListItems>
                </Left>
                <Right>
                    <ImageContainer>
                        <SpotlightImage src={require("../assets/images/home/hero.png").default} alt="Spotlight Image" />
                    </ImageContainer>
                </Right>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding: 50px 0;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
`;
const Heading = styled.h3`
    font-size: 60px;
    font-weight: 700;
    width: 70%;
    color: #fff;
    @media all and (max-width:1080px) {
        width: 85%;
    }
`;
const Color = styled.span`
    display: inline-block;
    font-size: 60px;
    font-weight: 700;
    color: #4eac56;
`;
const Description = styled.p`
    margin: 30px 0;
    font-size: 18px;
    width: 90%;
    color: #fff;
`;
const LinkContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const DiamondIcon = styled.img`
    margin-right: 10px;
`;
const LinkSpan = styled.span`
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
`;
const PreviewButton = styled.button`
    padding: 12px 24px;
    background: #4eac56;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 30px 0;
    transition: all ease-in .5s;
    &:hover {
        color:#4eac56;
        background: #fff;
        cursor: pointer;
        transition: all ease-in .5s;
    }
`;
const ListItems = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const ListItem = styled.li`
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
`;
const ListItemLogo = styled.img``;
const Right = styled.div`
    width: 50%;
`;
const ImageContainer = styled.div`
    width: 90%;
`;
const SpotlightImage = styled.img`
    width: 100%;
    display: block;
    opacity: 0.2;
`;
export default Spotlight
