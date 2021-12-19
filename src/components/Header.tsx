import styled from "styled-components"
import logo from '../logo.svg'
import Nav from "./Nav";

const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background-color:black;
    display: flex;
`;

const Logo = styled.img`
    width: 20%;
    height: 100%;
`


const Header = () => {
    return  <HeaderContainer>
                <Logo src = {logo}></Logo>
                <Nav/>
            </HeaderContainer>
}
export default Header