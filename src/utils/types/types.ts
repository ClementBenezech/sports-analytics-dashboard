// Data type for general user data.

export type userData = {
        id : string
        userInfos : {
            firstName: string
            lastName: string
            age: number
        }
        score: number
        keyData: {
            [calorieCount : string] : number
            proteinCount : number
            carbohydrateCount : number
            lipidCount: number
        }
  };

// To be used in user Activities
export type sessions = {
        day: string
        kilogram: number
        calories: number
}

// Data Type for user activity

export type  userActivity = {
        userId: string
        sessions: sessions [] 
}

// Data type for user performance

export type userPerformance = {
        userId: string
        kind: {
                id: number
                value: string
        }
        data :
            {
                value: number;
                kind: number
            } []
}

// Data type for user sport sessions

export type userAverageSessions = {
        userId: string
        sessions: {
                day: number|string,
                sessionLength: number 
        } []
}

/* Break down into multiple types (session[], used by userSessions)*/

