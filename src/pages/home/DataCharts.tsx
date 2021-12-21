import styled from "styled-components"
import ActivityChart from "./ActivityChart";
import AverageSessionChart from "./AverageSessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";

const DataChartsContainer = styled.div`
    width: 65vw;
    height: 30vh;
    background-color:white;
    display: flex;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content: space-evenly;
    font-size: 2vw;
    color: black;
    & i {
        color: red;
    }
`

const DataCharts = (props : {userId : string}) => {
            return (  
                <DataChartsContainer>
                    <ActivityChart userId = {props.userId}/>
                    <AverageSessionChart userId = {props.userId}/>
                    <PerformanceChart userId = {props.userId}/>
                    <ScoreChart userId = {props.userId}/>
                </DataChartsContainer>
            )
}



export default DataCharts