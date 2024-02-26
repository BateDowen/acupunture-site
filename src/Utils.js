import { useNavigate } from "react-router-dom";
import * as api from './api.js'
 export const demoHours = [
    {
      1707948000000: {
        availableHours: [
          "09:00 - 10:00",
          "10:00 - 11:00",
          "11:00 - 12:00",
          "12:00 - 13:00",
        ],
      },
    },
    {
      1708034400000: {
        availableHours: [
          "13:00 - 14:00",
          "14:00 - 15:00",
          "15:00 - 16:00",
          "16:00 - 17:00",
        ],
      },
    },
    {
      1708120800000: {
        availableHours: [
          "13:00 - 14:00",
          "14:00 - 15:00",
          "15:00 - 16:00",
          "16:00 - 17:00",
        ],
      },
    },
  ];

  export const getDate = async (date) => {
    return api.get(`hours/${date}`);
  }
  export const createDate = async (date,user) => {
    return api.post(`hours/${date}`, user);
  };
  export const bookHour = async (email,name,phone,date,hour,hourKey) => {
    return api.post(`hours/book`,{email,name,phone,date,hour,hourKey});
  };
  export const login = async (name,password) => {
    return api.post('auth/signIn',{name,password});
  };
