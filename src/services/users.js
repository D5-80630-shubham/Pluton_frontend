import axios from "axios";
import { createError, createUrl } from "./utils";


export async function signupUser(){
    try{
        const url = createUrl('user/signup')
        const body = {

        }
        const response = await axios.post(url,body)
        return response.data

    }catch(ex){
        return createError(ex)
    }
}

export async function signinUser(email,password){
    try{
        const url = createUrl('user/signin')
        const body = {
            email,
            password,
        }
        const response = await axios.post(url,body)
        return response.data
    }catch(ex){
        return createError(ex)
    }
}

export async function fetchUserProfile() {
    try {
      const authToken = sessionStorage.getItem("token");
      const url = createUrl('user/profile');
      
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      return response.data;
    } catch (error) {
        return createError(error)
    }
}