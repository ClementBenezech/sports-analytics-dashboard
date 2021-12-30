import styled from "styled-components"
import ActivityChart from "./ActivityChart";
import AverageSessionChart from "./AverageSessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";
import breakpoints from "../../utils/breakpoints";


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

    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
    }
`

/**
 * Renders all 4 home dashboard Data  Charts
 * @param { String } userId
 * @return { JSX.Element }
 */

const DataCharts = (props : {userId : string}):JSX.Element => {
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