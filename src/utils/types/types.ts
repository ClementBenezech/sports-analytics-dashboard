// Data type for general user data.

export type userData = {
    data : {
        id : string
        userInfos : {
            firstName: string
            lastName: string
            age: number
        }
        score: number
        keyData: {
            calorieCount : number
            proteinCount : number
            carbohydrateCount : number
            lipidCount: number
        }
    }
  };

// Data Type for user activity (To be validated)

export type  userActivity = {
    data : {
        userId: string
        sessions: [{
            day: string
            kilograms: number
            calories: number
        }]
    }
}

// Data type for user performance (To be validated)

export type userPerformance = {
    data: {
        userId: string
        kind: {
                id: number
                value: string
        }
        data : [
            {
                value: number;
                kind: number
            }
        ]
    }
}

// Data type for user sport sessions

export type userSessions = {
    data: {
        userId: string
        sessions: [
            {
            day: number
            sessionLength: number
            }
        ]
    }
}

