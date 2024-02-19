import axios from "axios";
import { createError, createUrl } from "./utils";


export async function signupUser(firstName,
    lastName,
    email,
    password,
    gender,
    dateOfBirth,
    phoneNumber){
    try{
        const url = createUrl('user/register')
        const body = {
        firstName,
        lastName,
        email,
        password,
        gender,
        dateOfBirth,
        phoneNumber
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
        return response;
    }catch(ex){
        return createError(ex)
    }
}

