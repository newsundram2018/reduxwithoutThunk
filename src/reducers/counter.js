const counter = (state = 1, action) => {

    switch (action.type) {

        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "apiData":
            console.log(action.payload, "-------------Inside fetch")
            return {
                ...state,
                movieData: action.payload
            }
        default:
            return state
    }
}

export default counter


