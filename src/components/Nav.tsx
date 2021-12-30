import styled from "styled-components"
import breakpoints from "../utils/breakpoints";

const NavContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction:row;
    color: white;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    font-size: 1.2vw;
    @media only screen and ${breakpoints.device.xs}{
        font-size: 2vh;
    }
`;


const Nav = () => {
    return  <NavContainer>
                <div>Accueil</div>
                <div>Profil</div>
                <div>Reglage</div>
                <div>Communauté</div>
            </NavContainer>
}
export default Nav