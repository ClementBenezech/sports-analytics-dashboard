import styled from "styled-components"
import KeyValues from "../pages/home/KeyValues";
import NameCard from "../pages/home/NameCard";
import DataCharts from "../pages/home/DataCharts";

const MainContentContainer = styled.div`
    width: 91%;
    padding-left: 5%;
    height: 90vh;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    box-sizing: border-box;
`;

const Greeting = styled.div`
    width: 100%;
    height: 3vw;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
`

/**
 * Renders the main content section of the app.
 * @param { String } userId
 * @return { JSX.Element }
 */


const MainContent = (props : {userId : string}) => {

    const greetingMessage = "Félicitation ! Vous avez explosé vos objectifs hier 👏"

      //Setting up a custom hook to fetch user data
                    return (  
                        <MainContentContainer>
                            <NameCard userId = {props.userId}/>
                            <Greeting>{greetingMessage}</Greeting>
                            <DataCharts userId = {props.userId}/>
                            <KeyValues userId = {props.userId}/>
                        </MainContentContainer>
                    )
}
export default MainContent