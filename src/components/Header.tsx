import styled from "styled-components";

const HeaderWrapper = styled.div`
    margin: 0 auto;
    width: 84%;
    background-color: #FF6600;
    margin-top: 8px;
    padding: 2px;
    
    display: flex;
    flex-direction: row;
`;

const Logo = styled.img`
    border: white 1px solid;
`;

const Heading = styled.h1`
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #222222;
    line-height: 12px;
    align-self: center;
    margin-left: 4px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <Logo src='logo.gif' alt="logo" />
            <Heading>Hacker News</Heading>
        </HeaderWrapper>
    ); 
};

export default Header