import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
       <MainContainer>
           <Wrapper className="wrapper">
                <Left>
                    <LogoImageContainer>
                        <Logo src={require("../assets/images/brand/logo_single.svg").default} alt="Logo" />
                    </LogoImageContainer>
                    <Version>v2.6.0</Version>
                </Left>
                <Right>
                    <ListItems>
                        <ListItem>
                            Home
                        </ListItem>
                        <ListItem>
                            Components
                        </ListItem>
                        <ListItem>
                            Pages
                        </ListItem>
                        <ListItem>
                            Documentation
                        </ListItem>
                        <ListItem>
                            Purchase Now
                        </ListItem>
                    </ListItems>
                </Right>
            </Wrapper>
       </MainContainer>
    )
}
const MainContainer = styled.div`
    padding-top: 30px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Right = styled.div`
    width: 70%;
`;
const LogoImageContainer = styled.div`
    width: 50px;
`;
const Logo = styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
`;
const Version = styled.span`
    display: inline-block;
    margin-left: 20px;
    padding: 2px 8px;
    border-radius: 10px;
    background: #1b324b;
    color: #0d51b0;
`;
const Left = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`;
const ListItems = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ListItem = styled.li`
    margin-right: 30px;
    color: #fff;
    &:last-child {
        margin-right: 0;
        padding: 12px 24px;
        color: #fff;
        background: #4eac56;
        border-radius: 10px;
        &:hover {
            background: #fff;
        }
    }
    font-size: 18px;
    font-weight: 500;
    &:hover {
        color:#4eac56;
        cursor: pointer;
    }

`;

export default Header
