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
    justify-content: center;
    align-items:center;
`;

const Logo = styled.img`
    width: 4vw;
    height:4vw;
    margin: 1vw;
`




const SideBar = () => {
    return  <SideBarContainer>
                <Logo src = {icon1}></Logo>
                <Logo src = {icon2}></Logo>
                <Logo src = {icon3}></Logo>
                <Logo src = {icon4}></Logo>
            </SideBarContainer>
}
export default SideBar