import axios from "axios";
import { createError, createUrl } from "../../services/utils";


export async function fetchUserProfile(id,token) {
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

export async function getUserTransaction(id,token) {
  try {
    const url = createUrl('transaction/custom/'+id);
    
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

export async function applyLoan(id,token,formBody) {
  
  try {
    const url = createUrl('loanAppl/'+id);
    
    const response = await axios.post(url, formBody,{
      headers: {
        Authorization: token
      },
    });

    return response.data;
  } catch (error) {
      return createError(error)
  }
}
export async function getAllAppliedLoan(id,token) {
  try {
    const url = createUrl('loanAppl/'+id);
    
    const response = await axios.get(url,{
      headers: {
        Authorization: token
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
      return createError(error)
  }
}
export async function getYourIdentification(id,token) {
  try {
    const url = createUrl('user/identification/'+id);
    
    const response = await axios.get(url,{
      headers: {
        Authorization: token
      },
    });
    return response.data;
  } catch (error) {
      return createError(error)
  }
}


export async function fillYourIdentification(id,token,body) {
  try {
    const url = createUrl('user/identification/'+id);
    
    const response = await axios.post(url, body,{
      headers: {
        Authorization: token
      },
    });

    return response.data;
  } catch (error) {
      return createError(error)
  }
}

