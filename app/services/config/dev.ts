import { ConfigInterface } from ".";

const dev: ConfigInterface = {
  baseUrl: "http://192.168.100.99:3000/api",
  apis: {
    loginApi:"/auth/login",
    sellerApi: "/users",
    generateSlotApi :"/slot/generate-slot",
    bookAppointmentApi:"/book-appointment",
    createUserApi :"/auth/register"
  
  },
  headers: {
    "Content-Type": "application/json"
  }
};

export default dev;
