/**
 * Calling REST API
 */

import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { merge, toString } from 'lodash';
// import { toast } from 'react-toastify';
// import { notifyFail } from 'utils/tostifyToastr';
import { config } from './config';
const USE_MOCK = toString(process.env.REACT_APP_USE_MOCK) === 'true';

const appConfig = {
    baseURL: config.baseUrl,
    headers: config.headers,
    timeout: 10 * 60 * 1000
};

class ServiceRequestCall {
    public request = async (args: AxiosRequestConfig) => {
        const options: AxiosRequestConfig = {
            ...appConfig,
            ...args
        };

        return new Promise((resolve) => {
            //  const mockOptions = merge({}, options);

            const controledAxios = Axios(options);

            controledAxios.then(async (Response: AxiosResponse) => {
                resolve({ success: Response });
                // console.log("inside promise success", Response);
            }).catch(async (error: AxiosError) => {
                // const exceptionHandler = new Error();
                console.log(error.response);
                if (error != null) {
                    let result = {
                        errorCode: (error && error?.response && error?.response?.data?.serviceErrors && error?.response?.data?.serviceErrors[0]?.errorCode)
                            || (error && error?.response && error?.response?.data?.status) || 'errorCode',
                        header: 'errorHeader',
                        message: (error && error.response && error?.response?.data?.serviceErrors && error.response.data.serviceErrors[0]?.msg)
                            || (error && error?.response && error?.response?.data?.error) || 'errorMessage'
                    };

                    // exceptionHandler.message = JSON.stringify(result);

                    // reject(result);
                    resolve({ error: result });
                }
            });
        });
    }
}

const XHRInstance = new ServiceRequestCall();

export { XHRInstance as serviceRequestCall };