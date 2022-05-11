import { config, Method, ResponseType } from "../config";
import { serviceRequest } from "../serviceRequestMiddleware";

export async function fetchSellerDetails(payload: any) {
  let searchParam = payload.name != "" ? payload.name : 0 
  const options = {
        method: Method.GET,
        url: config.apis.sellerApi+"?name="+searchParam,
        headers: { "Authorization": "Bearer " + payload.token }
      };
    
      return serviceRequest.request(options);
}
export async function fetchSlotListBySelectedDate(params:{selectedDate:string,userId:string,token:string}) {
  const options = {
        method: Method.GET,
        url: config.apis.generateSlotApi+"?selectedDate="+params.selectedDate+"&userId="+params.userId,
        headers: { "Authorization": "Bearer " + params.token }
      };
    
      return serviceRequest.request(options);
}
