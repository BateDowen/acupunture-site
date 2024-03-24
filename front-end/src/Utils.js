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
  export const deleteAppointmentHour = async (date,hourKey,hour,user) => {
    return api.post(`hours/delete/${date}`,{date,hourKey,hour,user})
  };
  export const createPost = (formData) => {
   return fetch('http://localhost:3030/posts/create-post',{
            method: 'POST',
            body: formData
          });
  };
  export const getPosts = (page) =>{
    return api.get(`posts?page=${page}`)
  };
  export const getPost = (id) =>{
    return api.get(`posts/${id}`)
  };
  export const updateSinglePost = (formData) => {
    return fetch('http://localhost:3030/posts/update-post',{
             method: 'PUT',
             body: formData
           });
   };
   export const deleteSinglePost = (id,user) =>{
    return api.post(`posts/delete/${id}`,{user})
  };