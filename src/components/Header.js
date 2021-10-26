import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function Header() {
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        } 
        }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
        }, []);

    return (
       <MainContainer className={header}>
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
    z-index: 1000;
    &.header {
        position: absolute;
        top: -28px;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 120px;
        color: #333;
        transform: translateY(0);
        transition: transform 0.6s ease;
    }
    &.header2 {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 86px;
        background-color: gray;
        color: #000;
        transform: translateY(10);
        transition: transform 6s ease;
        animation: myanimation 3s;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 80px;
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
    transition: all ease-in .5s;
    &:last-child {
        margin-right: 0;
        padding: 12px 24px;
        color: #fff;
        background: #4eac56;
        border-radius: 10px;
        &:hover {
            background: #fff;
            transition: all ease-in .5s;
        }
        @media all and (max-width:1080px) {
            display: none;
        }
    }
    font-size: 18px;
    font-weight: 500;
    @media all and (max-width:980px) {
       font-size: 16px;
       font-weight: normal;
    }
    &:hover {
        color:#4eac56;
        cursor: pointer;
        transition: all ease-in .5s;
    }
`;

export default Header
