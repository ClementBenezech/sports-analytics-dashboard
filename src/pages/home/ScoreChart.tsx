import { ResponsiveContainer, Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import { userData } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';

const ScoreChart = (props:{userId: string}) => {

    const [currentUserApiData] = useFetchApiData(props.userId as string, {} as userData )

    if (currentUserApiData !== null && currentUserApiData !== undefined ) {

        const score = currentUserApiData.score*100 + ' %'

    return(
        <ResponsiveContainer width="25%" height="40%"> 
        <RadialBarChart
                width={400} 
                height={400} 
                innerRadius="90%" 
                outerRadius="70%" 
                data={[{'score': currentUserApiData.score, 'fill': 'red'}, {'score': 1, 'fill': 'white'}]} 
                startAngle={0} 
                endAngle={360}
                barSize="10%"
                >
                <RadialBar name = "score" min-angle={15} label={ false }  dataKey='score'/>
                <Legend  align='center' payload={[{value: score, type: 'line', id: 'ID01'}]} stroke='red' iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' />
                <Tooltip />
        </RadialBarChart>
        </ResponsiveContainer>
    )
    } else {
        return <div><i className = "fas fa-basketball-ball fa-spin"></i></div>
    }
}

export default ScoreChart