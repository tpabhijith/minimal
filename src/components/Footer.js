import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <ImageContainer>
                    <Image src={require("../assets/images/brand/logo_single.svg").default} alt="Logo-footer" />
                </ImageContainer>
                <SubHeading>&copy; All rights reserved</SubHeading>
                <LinkSpan>made by <LinkItem>minimal.cc</LinkItem></LinkSpan>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding: 30px 0;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ImageContainer = styled.div`
    width: 50px;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const SubHeading = styled.span`
    font-size: 14px;
`;
const LinkSpan = styled.span`
    font-size: 14px;
    display: block;
`;
const LinkItem = styled.span`
    font-size: 14px;
    color: #4eac56;
    cursor: pointer;
`;
export default Footer
