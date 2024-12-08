/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React from "react";

const UserProfile = ({user}) => {
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
