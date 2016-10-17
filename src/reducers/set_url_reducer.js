export default function setUrlReducer(state=null, action){
  switch(action.type){
    case 'SET_URL':
      return action.payload.url
    default:
      return state
  }
}