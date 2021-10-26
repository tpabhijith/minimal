import React from 'react'
import styled from 'styled-components'
import icon from "../assets/images/home/icons8-checkmark (1).svg"
import forward from "../assets/images/home/icons8-more-than-30.png"
function Plan() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <Top>
                    <SubHeading>PRICING PLANS</SubHeading>
                    <Heading>The right plan for your business</Heading>
                    <Description>Choose the perfect plan for your needs. Always flexibile to grow</Description>
                </Top>
                <Bottom>
                    <ContentBox>
                        <TopBox>
                            <BoxSubHeading>LICENSE</BoxSubHeading>
                            <BoxHeading>Standard</BoxHeading>
                            <ImageContentBox>
                                <ImageContainer>
                                    <Image src={require('../assets/images/home/ic_js.svg').default} alt="image" />
                                </ImageContainer>
                            </ImageContentBox>
                        </TopBox>
                        <MiddleBox>
                            <ListItems>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>One end products</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>12 months updates</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>6 months of support</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Javascript version</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>TypeScript version</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Design Resources</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Commercial applications</Details>
                                </ListItem>
                            </ListItems>
                        </MiddleBox>
                        <BottomBox>
                            <TopContent>
                                <BoxItems>
                                    <BoxItem>Learn more</BoxItem>
                                    <BoxItem><ForwardIcon src={forward} alt="Forward icon" /></BoxItem>
                                </BoxItems>
                            </TopContent>
                            <BottomContent>
                                <Button>Choose Plan</Button>
                            </BottomContent>
                        </BottomBox>
                    </ContentBox>
                    <ContentBox>
                        <TopBox>
                            <BoxSubHeading>LICENSE</BoxSubHeading>
                            <BoxHeading>Standard Plus</BoxHeading>
                            <ImageContentBox>
                                <ImageContainer>
                                    <Image src={require('../assets/images/home/ic_sketch.svg').default} alt="image" />
                                    <Image src={require('../assets/images/home/ic_figma.svg').default} alt="image" />
                                    <Image src={require('../assets/images/home/ic_js.svg').default} alt="image" />
                                    <Image src={require('../assets/images/home/ic_ts.svg').default} alt="image" />
                                </ImageContainer>
                            </ImageContentBox>
                        </TopBox>
                        <MiddleBox>
                        <ListItems>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>One end products</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>12 months updates</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>6 months of support</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Javascript version</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>TypeScript version</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Design Resources</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Commercial applications</Details>
                                </ListItem>
                            </ListItems>
                        </MiddleBox>
                        <BottomBox>
                            <TopContent>
                                <BoxItems>
                                    <BoxItem>Learn more</BoxItem>
                                    <BoxItem><ForwardIcon src={forward} alt="Forward icon" /></BoxItem>
                                </BoxItems>
                            </TopContent>
                            <BottomContent>
                                <Button>Choose Plan</Button>
                            </BottomContent>
                        </BottomBox>
                    </ContentBox>
                    <ContentBox>
                        <TopBox>
                            <BoxSubHeading>LICENSE</BoxSubHeading>
                            <BoxHeading>Extended</BoxHeading>
                            <ImageContentBox>
                                <ImageContainer>
                                    <Image src={require('../assets/images/home/ic_sketch.svg').default} alt="image" />
                                    <Image src={require('../assets/images/home/ic_figma.svg').default} alt="image" />
                                    <Image src={require('../assets/images/home/ic_js.svg').default} alt="image" />
                                    <Image src={require('../assets/images/home/ic_ts.svg').default} alt="image" />
                                </ImageContainer>
                            </ImageContentBox>
                        </TopBox>
                        <MiddleBox>
                        <ListItems>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>One end products</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>12 months updates</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>6 months of support</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Javascript version</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>TypeScript version</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Design Resources</Details>
                                </ListItem>
                                <ListItem>
                                    <TickIcon src={icon} alt="Tick Icon" />
                                    <Details>Commercial applications</Details>
                                </ListItem>
                            </ListItems>
                        </MiddleBox>
                        <BottomBox>
                            <TopContent>
                                <BoxItems>
                                    <BoxItem>Learn more</BoxItem>
                                    <BoxItem><ForwardIcon src={forward} alt="Forward icon" /></BoxItem>
                                </BoxItems>
                            </TopContent>
                            <BottomContent>
                                <Button>Choose Plan</Button>
                            </BottomContent>
                        </BottomBox>
                    </ContentBox>
                </Bottom>
            </Wrapper>       
        </MainContainer>
    )
}

const MainContainer = styled.div`
    padding-bottom: 80px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 60px;
`;
const SubHeading = styled.h5`
    font-size: 20px;
    color: #818d9a;
    font-weight: 500;
`;
const Heading = styled.h3`
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 20px;
    @media all and (max-width:1080px) {
       font-size: 36px;
    }
`;
const Description = styled.p`
    font-size: 18px;
    color: #818d9a;
`;
const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const ContentBox = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0px 2px 30px -10px rgba(110,104,110,0.8);
    transition: all ease-in .5s;
    &:hover {
        box-shadow: 0px 2px 30px 0px rgba(110,104,110,0.8);
        transition: all ease-in .5s;
    }
`;
const TopBox = styled.div`
    width: 100%;
`;
const BoxSubHeading = styled.h5`
    font-size: 20px;
    color: #818d9a;
    font-weight: 500;
    margin-bottom: 20px;
    @media all and (max-width:1080px) {
        font-size: 18px;
    }
    @media all and (max-width:980px) {
        font-size: 14px;
    }
`;
const BoxHeading = styled.h3`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    @media all and (max-width:1080px) {
        font-size: 30px;
    }
    @media all and (max-width:980px) {
        font-size: 24px;
    }
    
`;
const ImageContentBox = styled.div`
    margin-bottom: 20px;
`;
const ImageContainer = styled.div`
    width: 20%;
    display: flex;
    @media all and (max-width: 1080px) {
        width: 15%;
    }
`;
const Image = styled.img`
    margin-right: 20px;
    width: 100%;
    display: block;
`;
const MiddleBox = styled.div`
    width: 100%;
`;
const ListItems = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;
const ListItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    width: 100%;
    &:nth-child(3) {
        &::after {
            content: "";
            width: 100%;
            margin-top: 20px;
            border-bottom: 1px dotted #818d9a;
            display: block;
        }
    }
`;
const TickIcon = styled.img`
    width: 30px;
    margin-right: 10px;
`;
const Details = styled.span``;
const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const TopContent = styled.div`
    margin-bottom: 20px;
`;
const BoxItems = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    text-align: left;
`;
const BoxItem = styled.li`
    &:first-child {
        text-decoration: underline;
        font-size: 16px;
        font-weight: 600;
    }
    &:last-child {
        display: flex;
    }
    cursor: pointer;
`;
const ForwardIcon = styled.img`
    width: 15px;
`;
const BottomContent = styled.div`
    width: 100%;
`;
const Button = styled.button`
    padding: 12px 24px;
    border:1px solid #4eac56;
    color:#4eac56;
    border-radius: 10px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    transition: all ease-in .5s;
    &:hover {
        background: #4eac56;
        color: #fff;
        box-shadow: 0px 2px 30px 0px rgba(110,104,110,0.8);
        transition: all ease-in .5s;
    }
    cursor: pointer;
`;


export default Plan
