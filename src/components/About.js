import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <Top>
                    <HeadingSpan>MINIMAL</HeadingSpan>
                    <Heading>What minimal helps you?</Heading>
                </Top>
                <Bottom>
                    <Left>
                        <ContentBox>
                            <ImageConatiner>
                                <LogoImage src={require("../assets/images/icons/ic_design.svg").default} alt="Image"  />
                            </ImageConatiner>
                            <ContentHeading>UI & UX Design</ContentHeading>
                            <Description>The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.</Description>
                        </ContentBox>
                    </Left>
                    <Middle>
                        <ContentBox className="middle">
                            <InnerContentBox>
                                <ImageConatiner>
                                    <LogoImage src={require("../assets/images/icons/ic_code.svg").default} alt="Image" />
                                </ImageConatiner>
                                <ContentHeading>Development</ContentHeading>
                                <Description>Easy to customize and extend each compoent, saving you time and money.</Description>
                            </InnerContentBox>
                        </ContentBox>
                    </Middle>
                    <Right>
                        <ContentBox className="last">
                            <ImageConatiner>
                                <LogoImage src={require("../assets/images/brand/logo_single.svg").default} alt="Image" />
                            </ImageConatiner>
                            <ContentHeading>Branding</ContentHeading>
                            <Description>Consistent design in colors, fonts...makes brand recognition easy.</Description>
                        </ContentBox>
                    </Right>
                </Bottom>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding: 100px 0;
`;
const Wrapper = styled.div``;
const Top = styled.div`
    text-align: center;
`;
const HeadingSpan = styled.span`
    font-weight: 500;
   
`;
const Heading = styled.h3`
    font-size: 46px;
    font-weight: 700;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
`;
const Left = styled.div`
    width: 30%;
   
`;
const ContentBox = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #f4f6f8;
    padding:30px;
    height: 450px;
    border-radius: 25px;
    position: relative;
    top: 30px;
    left: 0px;
    &.middle {
        background: #fff;
        box-shadow: -12px 9px 54px -13px rgba(0,0,0,0.75);
        padding: 10px;
        position: absolute;
        top: -230px;
        left: 15px;
    }
    &.last {
        top:50px;
    }
`;
const ImageConatiner = styled.div`
    width: 40px;
    margin:60px auto;
`;
const LogoImage = styled.img`
    width: 100%;
    display: block;

`;
const InnerContentBox = styled.div`
      width: 90%;
        background: #fff;
        margin: auto;
        height: 400px;
        border-radius: 25px;
        box-shadow: -12px 9px 29px -13px rgba(0,0,0,0.75);
`;
const ContentHeading = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
`;
const Description = styled.div``;
const Middle = styled.div`
    width: 30%;
    position: relative;
`;
const Right = styled.div`
    width: 30%;
`;

export default About
