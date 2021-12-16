import './App.css';
import useFetchApiData from './utils/useFetchApiData'
import { userData } from './utils/types/types';
import { userActivity } from './utils/types/types';


function App() {

  //Setting up a custom hook to fetch user data
  const [currentUserApiData]          = useFetchApiData("12" as string, {} as userData )
  const [currentUserActivityApiData]  = useFetchApiData("12/activity" as string, {} as userActivity )

  if (currentUserApiData === null || currentUserActivityApiData === null) {
  return (
    <header className="App-header">
      <div>Fetching data, please wait...</div>
    </header>
  )
  } else if (currentUserApiData === undefined || currentUserActivityApiData === undefined) {
    return (
        <div className="App">
        <header className="App-header">
          <div>Sorry, user does not exist</div>
        </header>
        </div>
    )
  } else {
    return (
      <div className="App">
      <header className="App-header">
        <div>{currentUserApiData.data.id}</div>
        <div>{currentUserActivityApiData.data.userId}</div>
        {/*<div>{currentUserApiData.data.userInfos.firstName}</div>
        <div>{currentUserApiData.data.userInfos.lastName}</div>
        <div>{currentUserApiData.data.userInfos.age}</div>
        <div>{currentUserApiData.data.score}</div>
        <div>{currentUserApiData.data.keyData.proteinCount}</div>
        <div>{currentUserApiData.data.keyData.calorieCount}</div>
        <div>{currentUserApiData.data.keyData.lipidCount}</div>
        <div>{currentUserApiData.data.keyData.carbohydrateCount}</div>*/}
      </header>
      </div>
  )
  }
}

export default App;
