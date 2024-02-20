import axios from "axios";
import { createError, createUrl } from "../../services/utils";


export async function fetchAdminProfile(id,token) {
    try {
      const url = createUrl('user/'+id);
      
      const response = await axios.get(url, {
        headers: {
          Authorization: token
        },
      });

      return response.data;
    } catch (error) {
        return createError(error)
    }
}
export async function getAllUserApplication(token) {
  console.log(token)
  try {
    const url = createUrl('loanAppl/admin/all');
    
    const response = await axios.get(url, {
      headers: {
        Authorization: token
      },
    });

    return response.data;
  } catch (error) {
      return createError(error)
  }
}