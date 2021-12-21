import { ResponsiveContainer, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { userPerformance } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';

const PerformanceChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/performance' as string, {} as userPerformance )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.data)
        return (
            <ResponsiveContainer width="25%" height='40%'> 
                <RadarChart
                outerRadius={90}
                width={400}
                height={400}
                data={currentUserActivityApiData.data}>
                    <PolarGrid stroke="#f5f5f5" />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis angle={30} domain={['0', 'dataMax']} />
                    <Radar stroke="black" name = 'performance' dataKey="value" fill="red" />
                    <Legend />
                </RadarChart>
                
            </ResponsiveContainer>
    )
    } else {
        return <div><i className = "fas fa-basketball-ball fa-spin"></i></div>
    }
    
    
} 

export default PerformanceChart

