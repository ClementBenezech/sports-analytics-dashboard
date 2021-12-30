import styled from "styled-components"
import logo from '../logo.png'
import Nav from "./Nav";
import breakpoints from "../utils/breakpoints";

const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background-color:black;
    display: flex;
`;

const Logo = styled.img`
    margin-left: 3vw;
    width: 10%;
    height: 100%;
    object-fit:contain;
    @media only screen and ${breakpoints.device.xs}{
       width: 20%;
    }
`


const Header = () => {
    return  <HeaderContainer>
                <Logo src = {logo}></Logo>
                <Nav/>
            </HeaderContainer>
}
export default Header