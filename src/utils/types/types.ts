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

// To be used in user Activities and sessions
export type sessions = {
        day: string
        kilograms: number
        calories: number
}

// Data Type for user activity (To be validated)

export type  userActivity = {
        userId: string
        sessions: sessions [] /* Test this syntax */
}

// Data type for user performance (To be validated)

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

export type userSessions = {
    data: {
        userId: string
        sessions: sessions []
    }
}

/* Break down into multiple types (session[], used by userSessions)*/

