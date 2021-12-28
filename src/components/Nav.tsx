import styled from "styled-components"

const NavContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction:row;
    color: white;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
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