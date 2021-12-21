import styled from "styled-components"
import KeyValues from "../pages/home/KeyValues";
import NameCard from "../pages/home/NameCard";
import DataCharts from "../pages/home/DataCharts";

const MainContentContainer = styled.div`
    width: 95%;
    height: 90vh;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    align-content:flex-start;

`;

const Greeting = styled.div`
    width: 95vw;
    height: 10vh;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    margin-left: 2vw;
`



const MainContent = (props : {userId : string}) => {

    const greetingMessage = "Félicitations, vous avez explosé vos objectifs hier!"

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