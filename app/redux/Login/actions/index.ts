export const SET_JWT_TOKEN = 'SET_JWT_TOKEN';
export const CREATE_ACCOUNT_REQ = 'CREATE_ACCOUNT_REQ';

export function setJwtToken(data: any) {
  return { type: SET_JWT_TOKEN, jwtToken: data }
}

// Book Appointment
export function triggerCreateAccount(data: any,token:string) {
  return { type: CREATE_ACCOUNT_REQ, payload: data ,token:token}
}

