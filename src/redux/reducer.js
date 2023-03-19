export const myData = (data=[],action) => {
    if(action.type === "api_data"){
        return action.data
    }else{
        return data
    }
}