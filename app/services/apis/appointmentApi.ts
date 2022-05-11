import { config, Method, ResponseType } from "../config";
import { serviceRequest } from "../serviceRequestMiddleware";




export async function bookAppointmentDetail(payload: any) {
  const options = {
    method: Method.POST,
    url: config.apis.bookAppointmentApi,
    data: payload,
    headers: { "Authorization": "Bearer " + payload.token }
  };
  return serviceRequest.request(options);
}

