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
    padding: 30px 0;
`;
const Left = styled.div`
    width: 45%;
    @media all and (max-width:840px) {
        width: 30%;
    }
    @media all and (max-width:480px) {
        display: none;
    }
`;
const ImageContainer = styled.div`
    width: 100%;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div`
    width: 55%;
    @media all and (max-width:840px) {
        width: 70%;
    }

    @media all and (max-width:480px) {
        text-align: center;
        width: 100%;
    }
`;
const Heading = styled.h3`
    color: #fff;
    font-size: 44px;
    font-weight: 700;
    width: 60%;
    margin-bottom: 40px;
    @media all and (max-width:640px) {
       font-size: 36px;
    }
    @media all and (max-width:540px) {
      width: 90%;
    }
`;
const Button = styled.button`
    padding: 12px 24px;
    background: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease-in .5s;
    &:hover {
        box-shadow: -13px 47px 75px 19px rgba(54,158,12,1);
        color: #4eac56;
        transition: all ease-in .5s;
    }
    @media all and (max-width:640px) {
       font-size: 14px;
    }
`;


export default Purchase
