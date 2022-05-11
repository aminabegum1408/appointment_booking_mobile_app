/**
 * Fetch config env wise
 */

 import dev from "./dev";
 import prod from "./prod";
 
 /**
 * Config Interface
 */
export interface ConfigInterface {
    baseUrl: string;
    apis: {
        [key: string]: string;
    };
    headers: any ;
}

 let config = dev;
 if (process.env.REACT_APP_ENV === "prod") {
   config = prod;
 } else {
   config = dev;
 }
 
 enum Method {
   GET = "get",
   POST = "post",
   PUT = "put",
   DELETE = "delete"
 }
 
 enum ResponseType {
   ARRAYBUFFER = "arraybuffer",
   BLOB = 'blob',
   DOCUMENT = 'document',
   JSON = 'json',
   TEXT = 'text',
   STREAM = 'stream'
 }
 export { config, Method, ResponseType };
 