import React from 'react'
import styled from 'styled-components'

function StarterKit() {
    return (
       <MainContainer>
           <Wrapper className="wrapper">
               <Left>
                   <SubHeading>INTERFACE STARTER KIT</SubHeading>
                   <Heading>Huge pack of elements</Heading>
                   <Description>We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just drive in!</Description>
                   <Button>View All Components</Button>
               </Left>
               <Right>
                   <ImageContainer1>
                       <Image1 src={require("../assets/images/home/screen_light_1.png").default} alt="Image" />
                   </ImageContainer1>
                    <ImageContainer2>
                        <Image2 src={require("../assets/images/home/screen_light_2.png").default} alt="Image" />
                    </ImageContainer2>
                    <ImageContainer3>
                        <Image3 src={require("../assets/images/home/screen_light_3.png").default} alt="Image" />
                    </ImageContainer3>
               </Right>
           </Wrapper>
       </MainContainer>
    )
}
const MainContainer = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width:40%;
    margin-top: 20%;
`;
const SubHeading = styled.h5`
    font-size: 20px;
    font-weight: 500;
`;
const Heading = styled.h3`
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 30px;
    width: 70%;
`;
const Description = styled.p`
    font-size: 18px;
    margin-bottom: 30px;
    width: 80%;
`;
const Button = styled.button`
    padding:12px 24px;
    border: 1px solid #000;
    border-radius: 10px;
    font-weight: 600;
`;
const Right = styled.div`
    width:60%;
    position: relative;
    /* z-index: 5; */
`;
const ImageContainer1 = styled.div`
    width: 40%;
    position: absolute;
    top: 0;
        left: 20px;
        z-index: 3;
        border-radius: 10px;
        transform: skewY(15deg);
        box-shadow: 18px -9px 47px -7px rgb(0 0 0 / 75%);

`;
const Image1 = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
`;
const ImageContainer2 = styled.div`
    width: 40%;
    position: absolute;
    top: -40px;
    left: 180px;
    border-radius: 10px;
    z-index: 2;
    transform: skewY(15deg);
    box-shadow: 18px -9px 47px -7px rgb(0 0 0 / 75%);
`;
const Image2 = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
`;
const ImageContainer3 = styled.div`
    width: 40%;
    position: absolute;
    top: -80px;
    left: 360px;
    border-radius: 10px;
    z-index: 1;
    transform: skewY(15deg);
    box-shadow: 18px -9px 47px -7px rgb(0 0 0 / 75%);
`;
const Image3 = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
`;
export default StarterKit
