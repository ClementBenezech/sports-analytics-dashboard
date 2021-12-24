import { ResponsiveContainer, Legend, RadialBar, RadialBarChart, Tooltip, PolarAngleAxis } from 'recharts';
import { userData } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #FBFBFB;
    border-radius: 0.3vw;
    width: 15vw;
    height: 15vw;
    display:flex;
    justify-content:center;
    align-items:center;
`


const ScoreChart = (props:{userId: string}) => {

    const [currentUserApiData] = useFetchApiData(props.userId as string, {} as userData )

    if (currentUserApiData !== null && currentUserApiData !== undefined ) {

        const score = currentUserApiData.score*100 + ' %'

    return(
        <Wrapper>
        <ResponsiveContainer width="100%" height="100%"> 
        <RadialBarChart
                width={400} 
                height={400} 
                innerRadius="90%" 
                outerRadius="100%" 
                data={[{'score': currentUserApiData.score, 'fill': 'red', barSize:"10%"}]} 
                startAngle={0} 
                endAngle={360}
                /*barSize="100%"*/
                barGap="0%"
                barCategoryGap="0%"
                >
                <PolarAngleAxis
                type="number"
                domain={[0, 1]}
                angleAxisId={0}
                tick={false}
                fill= "white"
                />

                <RadialBar name = "score" min-angle={15} label={ false }  dataKey='score'/>

                <Legend  align='center' payload={[{value: score, type: 'line', id: 'ID01'}]} stroke='red' iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' />
                <Tooltip />
        </RadialBarChart>
        </ResponsiveContainer>
        </Wrapper>
    )
    } else {
        return <Wrapper><i className = "fas fa-basketball-ball fa-spin"></i></Wrapper>
    }
}

export default ScoreChart