import { config, Method } from "../config";
import { serviceRequest } from "../serviceRequestMiddleware";


export async function createUserAccount(payload: any) {
  console.log(JSON.stringify(payload)+"==========payload")
  const options = {
    method: Method.POST,
    url: config.apis.createUserApi,
    data: payload,
  };
  return serviceRequest.request(options);
}

