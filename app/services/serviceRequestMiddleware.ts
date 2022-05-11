/**
 * Service request middleware
 */

import { AxiosRequestConfig } from 'axios';
import { toLower, isEmpty } from 'lodash';
// import Container, {Toast} from 'toastify-react-native';
import { serviceRequestCall } from "./serviceRequestCall"

class ServiceRequest {
    public async request(option: AxiosRequestConfig) {
        const request: any = await serviceRequestCall.request(option);
        if (request.success) {
            if (request.success.config && ['put', 'post', 'delete'].indexOf(toLower(request.success.config.method)) > -1 &&
                NO_SUCCESS_URL.indexOf(getLastStringOfUrl(request.success.config.url)) === -1) {
                let message = '';
                switch (toLower(request.success.config.method)) {
                    case 'put':
                        message = 'Record updated successfully.';
                        break;
                    case 'post':
                        message = 'Record added successfully.';
                        break;
                    case 'delete':
                        message = 'Record status updated.';
                        break;
                    default:
                        message = 'Transaction done sucessfully.';
                }
                // Toast.success(message, {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //   });
            }
        }
        else {
            // toast.error(request.error.message, {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //   });
        }
        return request;
    }
}
const ServiceInstance = new ServiceRequest();

export { ServiceInstance as serviceRequest };

/**
 * Whitelist url
 * Do not check for success message
 * enter last string after /
 */
export const NO_SUCCESS_URL = ["organisationDetailsBySearchCriteria", "contactDetailsBySearchCriteria", "login", "leadDetailBySearchCriteria", "enums"];


/**
 * Get last word of url
 */
export function getLastStringOfUrl(url: string): string {
    if (!isEmpty(url)) {
        const splitUrl = url.split('/');
        if (!isEmpty(splitUrl[splitUrl.length - 1])) {
            return splitUrl[splitUrl.length - 1];
        } else {
            return splitUrl[splitUrl.length - 2];
        }
    } else {
        return '';
    }
}