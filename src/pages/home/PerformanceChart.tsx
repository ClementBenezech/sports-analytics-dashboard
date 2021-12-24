import { ResponsiveContainer, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { userPerformance } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #282D30;
    border-radius: 0.3vw;
    width: 15vw;
    height: 15vw;
    display:flex;
    justify-content:center;
    align-items:center;
    & i {
        color: red;
    }
`

const PerformanceChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/performance' as string, {} as userPerformance )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.data)
        return (
            <Wrapper>
                <ResponsiveContainer width="100%" height='100%'> 
                    <RadarChart
                    outerRadius={90}
                    width={400}
                    height={400}
                    data={currentUserActivityApiData.data}>
                        <PolarGrid stroke="#f5f5f5" />
                        <PolarAngleAxis dataKey="kind" />
                        {/*<PolarRadiusAxis angle={30} domain={['0', 'dataMax']} />*/}
                        <Radar stroke="#FF0101" name = 'performance' dataKey="value" fill="#FF0101" opacity="0.7"/>
                    </RadarChart>
                    
                </ResponsiveContainer>
            </Wrapper>
    )
    } else {
        return <Wrapper><i className = "fas fa-basketball-ball fa-spin"></i></Wrapper>
    }
    
    
} 

export default PerformanceChart

