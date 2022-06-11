export const getSession = (session) => ({
    type: "GET_SESSION",
    payload: { session }
})

export const setSession = (session) => ({
    type: "SET_SESSION",
    payload: { session }
})