import { ResponsiveContainer, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { userPerformance } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';
import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

const Wrapper = styled.div`
    background-color: #282D30;
    border-radius: 0.3vw;
    width: 18vw;
    height: 18vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 0.7vw;
    color:white;
    font-weight:bold;
    & > * {
        fill:white;
    }
    & i {
        color: red;
    }

    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
        height: 35vh;
        margin: 2vh 0 2vh 0;
        font-size: 2vh;
    }
`

/**
 * Renders the performance radar chart based on the /user/{userId}/performance route from the API
 * @param { String } userId
 * @return { JSX.Element }
 */

const PerformanceChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/performance' as string, {} as userPerformance )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.data)

        const kinds:any = currentUserActivityApiData.kind
        const dataWithLabels:any[] = []
        currentUserActivityApiData.data.map(element => {
            const kindLabel:any = kinds[element.kind.toString()]
            dataWithLabels.push({value: element.value, kind: kindLabel, color: 'white' })
        })

        return (
            <Wrapper>
                <ResponsiveContainer width="100%" height='100%'> 
                    <RadarChart
                    outerRadius={75}
                    width={200}
                    height={200}
                    data={/*currentUserActivityApiData.data*/dataWithLabels}>
                        <PolarGrid stroke="#f5f5f5"/>
                        <PolarAngleAxis dataKey="kind"  />
                        {/*<PolarRadiusAxis angle={30} domain={['0', 'dataMax']} />*/}
                        <Radar stroke="#FF0101" name = 'performance' dataKey="value" fill="#FF0101"  opacity="0.7" />
                    </RadarChart>
                    
                </ResponsiveContainer>
            </Wrapper>
    )
    } else {
        return <Wrapper><i className = "fas fa-basketball-ball fa-spin"></i></Wrapper>
    }
    
    
} 

export default PerformanceChart

