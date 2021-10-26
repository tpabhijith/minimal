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
    @media all and (max-width:1080px) {
       padding-bottom: 0px;
    }
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
    @media all and (max-width:980px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 30%;
    @media all and (max-width:1080px) {
        width: 33%;
    }
    @media all and (max-width:980px) {
        width: 80%;
        height: unset;
    }
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
    @media all and (max-width:1080px) {
        position: unset;
        height: unset;
        margin-bottom: 30px;
    }
    &.middle {
        background: #fff;
        box-shadow: -14px 9px 50px -33px rgb(0 0 0 / 75%);
        padding: 10px;
        position: absolute;
        top: -230px;
        left: 15px;
        @media all and (max-width:1080px) {
            position: unset;
        }
    }
    &.last {
        top:50px;
        @media all and (max-width:1080px) {
            position: unset;
        }
    }
`;
const ImageConatiner = styled.div`
    width: 40px;
    margin:60px auto;
    @media all and (max-width:980px) {
        width: 100px;
    }
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
        box-shadow: -14px 9px 50px -33px rgb(0 0 0 / 75%);
`;
const ContentHeading = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
    @media all and (max-width:980px) {
        font-size: 30px;
    }
`;
const Description = styled.div`
    @media all and (max-width:980px) {
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 30px;
    }
`;
const Middle = styled.div`
    width: 30%;
    position: relative;
    @media all and (max-width:1080px) {
        width: 33%;
    }
    @media all and (max-width:980px) {
        width: 80%;
        height: unset;
    }
`;
const Right = styled.div`
    width: 30%;
    @media all and (max-width:1080px) {
        width: 33%;
    }
    @media all and (max-width:980px) {
        width: 80%;
        height: unset;
    }
`;

export default About
