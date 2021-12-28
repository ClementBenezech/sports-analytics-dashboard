import styled from "styled-components"
import ActivityChart from "./ActivityChart";
import AverageSessionChart from "./AverageSessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";

const DataChartsContainer = styled.div`
    width: 75%;
    height: 75%;
    background-color:white;
    display: flex;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content: space-between;
    font-size: 2vw;
    color: black;
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