import React from 'react'
import styled from 'styled-components'

function Purchase() {
    return (
        <MianContainer>
            <Wrapper className="wrapper">
                <ContentBox>
                    <Left>
                        <ImageContainer>
                            <Image src={require('../assets/images/home/rocket.png').default} alt="Image" />
                        </ImageContainer>
                    </Left>
                    <Right>
                        <Heading>Get started with minimal kit today</Heading>
                        <Button>Purchase Now</Button>
                    </Right>
                </ContentBox>
            </Wrapper>
        </MianContainer>
    )
}
const MianContainer = styled.div`
    padding: 50px 0;
`;
const Wrapper = styled.div``;
const ContentBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background: #4eac56;
    border-radius: 30px;
`;
const Left = styled.div`
    width: 45%;
`;
const ImageContainer = styled.div``;
const Image = styled.img``;
const Right = styled.div`
    width: 55%;
`;
const Heading = styled.h3`
    color: #fff;
    font-size: 44px;
    font-weight: 700;
    width: 60%;
    margin-bottom: 40px;
`;
const Button = styled.button`
    padding: 12px 24px;
    background: #fff;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        box-shadow: -13px 47px 75px 19px rgba(54,158,12,1);
    }
`;


export default Purchase
