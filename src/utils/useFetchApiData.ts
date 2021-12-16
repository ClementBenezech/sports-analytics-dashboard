import { useState, useEffect } from "react"

/* This custom hook fetches data for the user we get as a parameter*/
/* The return datatype is dynamically determined based on the datatype parameter we pass when using the hook */
const useFetchApiData = <Type>(query: string, dataType: Type):[Type | null | undefined]  => {

    //Setting up a hook for our API data. This hook can have 3 types of values:
    // 1) UserData, the data structure of a valid API response.
    // 2) null, if no call has been done yet.
    // 3) undefined, if an invalid response was received.
    const [apiData, setApiData] = useState< typeof dataType| null | undefined>(null)

    // After each render...
    useEffect(() => {
        // If we do not have data from the API yet, fetch it!
        if (apiData === null) {    
        // Fetching data
            fetch('http://localhost:3000/user/'+query, {mode: 'cors'})
            .then (response => 
                response.json())
            .then (response => {
                const data = response;
                //setting new value for apiData with what we got from the API call
                if (data !== "can not get user") {
                    // If the result of the call is not an error message
                    setApiData(data);
                }
                else {
                    // If there is no result, we set the data as undefined.
                    setApiData(undefined)
                }
        })}

        }, [apiData, query])

  return [apiData]

}

export default useFetchApiData

