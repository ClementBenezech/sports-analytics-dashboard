import styled from "styled-components"
import NameCard from "../pages/home/NameCard";

const MainContentContainer = styled.div`
    width: 95vw;
    height: 90vh;
    display: flex;
`;


const MainContent = (props : {userId : string}) => {

      //Setting up a custom hook to fetch user data
                    return (  
                        <MainContentContainer>
                            <NameCard userId = {props.userId}/>
                        </MainContentContainer>
                    )
}
export default MainContent