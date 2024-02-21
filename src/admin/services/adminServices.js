import axios from "axios";
import { createError, createUrl } from "../../services/utils";

export async function fetchAdminProfile(id, token) {
  try {
    const url = createUrl("user/" + id);

    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    return createError(error);
  }
}
export async function getAllUserApplication(token) {
  try {
    const url = createUrl("loanAppl/admin/all");

    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    return createError(error); 
  }
}

export async function approveLoan(token, applid, body) {
  console.log(applid)
  console.log(body)
  console.log(token)
  
  
  try {
    const url = createUrl("sanction/" + applid);
    const response = await axios.post(url, body, {
      headers: {
        Authorization: token,
      },
    });
    console.log(url)
    return response.data;
  } catch (error) {
    
    return createError(error);
  }
}
