import styled from "styled-components"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

const SideBarContainer = styled.div`
    width: 8vw;
    height: 90vh;
    background-color:black;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
`;

const LogosContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
`

const Logo = styled.img`
    width: 6vh;
    height:6vh;
    margin: 1vw;
`

const Copyright = styled.div`
    transform: rotate(270deg);
    color:white;
    width: max-content;
    font-size: 1vw;
`




const SideBar = () => {
    return  <SideBarContainer>
                <LogosContainer>
                    <Logo src = {icon1}></Logo>
                    <Logo src = {icon2}></Logo>
                    <Logo src = {icon3}></Logo>
                    <Logo src = {icon4}></Logo>
                </LogosContainer>
                <Copyright>Copyright SportSee 2021</Copyright>
            </SideBarContainer>
}
export default SideBar