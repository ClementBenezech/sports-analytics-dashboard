import './App.css';
import useFetchUserData from './utils/useFetchUserData'


function App() {

  //Setting up a custom hook to fetch user data
  const [currentUserApiData] = useFetchUserData("12" as string)

  if (currentUserApiData === null) {
  return (
    <header className="App-header">
      <div>Fetching data, please wait...</div>
    </header>
  )
  } else if (currentUserApiData === undefined) {
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
        <div>{currentUserApiData.data.userInfos.firstName}</div>
        <div>{currentUserApiData.data.userInfos.lastName}</div>
        <div>{currentUserApiData.data.userInfos.age}</div>
        <div>{currentUserApiData.data.score}</div>
        <div>{currentUserApiData.data.keyData.proteinCount}</div>
        <div>{currentUserApiData.data.keyData.calorieCount}</div>
        <div>{currentUserApiData.data.keyData.lipidCount}</div>
        <div>{currentUserApiData.data.keyData.carbohydrateCount}</div>
      </header>
      </div>
  )
  }
}

export default App;
