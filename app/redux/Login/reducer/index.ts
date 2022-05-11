import {
  SET_JWT_TOKEN
} from '../actions'

interface LoginState {
  jwtToken: any | null,

}


const initCommonState: LoginState = {
  jwtToken: ""
}


export default function LoginReducre(state = initCommonState, action:any) {
  switch (action.type) {
    
    case SET_JWT_TOKEN:
      return { ...state, jwtToken: action.jwtToken }
    default:
      return state
  }
}
