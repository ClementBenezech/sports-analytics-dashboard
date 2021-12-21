import styled from "styled-components"
import KeyValues from "../pages/home/KeyValues";
import NameCard from "../pages/home/NameCard";
import DataCharts from "../pages/home/DataCharts";

const MainContentContainer = styled.div`
    width: 95vw;
    height: 90vh;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;

`;


const MainContent = (props : {userId : string}) => {

      //Setting up a custom hook to fetch user data
                    return (  
                        <MainContentContainer>
                            <NameCard userId = {props.userId}/>
                            <DataCharts userId = {props.userId}/>
                            <KeyValues userId = {props.userId}/>
                        </MainContentContainer>
                    )
}
export default MainContent