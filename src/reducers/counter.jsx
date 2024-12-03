// khởi tạo giá trị state
const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "COUNTER_UP":
            return {
                count: state.count + 1
            }
            
        case "COUNTER_DOWN":
            return {
                count: state.count - 1
            }

        case "COUNTER_RESET":
            return {
                count: 0
            }

        default: 
        return {
            count: state.count
        }
    }
}