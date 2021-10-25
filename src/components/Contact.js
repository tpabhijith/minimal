import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
       <MainContainer>
           <Wrapper className="wrapper">
               <Heading>Still have questions?</Heading>
               <Description>Please describe your case to recieve the most accurate advice.</Description>
               <Button>Contact Us</Button>
           </Wrapper>
       </MainContainer>
    )
}
const MainContainer = styled.div`
    padding: 60px 0;
`;
const Wrapper = styled.div`
    text-align: center;
`;
const Heading = styled.h3`
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 18px;
    color: #818d9a;
    margin-bottom: 20px;
`;
const Button = styled.button`
    padding: 12px 24px;
    border: 1px solid #4eac56;
    border-radius: 10px;
    color: #4eac56;
    font-size: 18px;
    &:hover {
        color: #fff;
        background: #4eac56;
    }
`;
export default Contact
