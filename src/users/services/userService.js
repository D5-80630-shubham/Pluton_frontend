import axios from "axios";
import { createError, createUrl } from "../../services/utils";


export async function fetchUserProfile(id,token) {
    console.log(id)
    console.log(token)
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