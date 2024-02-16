import React, { useState } from "react";
import loading from '../../assets/loading screen/loading_gif.gif'
import { fetchUserProfile } from "../../services/users";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const result = fetchUserProfile();
  if (result["status"] === "success") {
    setUserProfile(result);
    setIsLoading(false);
    
  } else {
    toast.error(result["error"]);
  }

  if (isLoading) {
    return (
      <div style={{textAlign:"center"}}>
        <img src={loading} alt="loading"></img>
      </div>
    );
  }
  if (!userProfile) {
    return <div>Error: Unable to fetch user profile.</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <th>
            <td></td>
          </th>
        </thead>
      </table>
      
    </div>
  );
};

export default UserProfile;
