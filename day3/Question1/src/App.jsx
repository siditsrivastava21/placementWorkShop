/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import EditProfile from "./com/EditProfile";
import UserProfile from "./com/UserProfile";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Web Developer",
  };

  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "View Profile" : "Edit Profile"}
      </button>
      {isEditMode ? (
        <EditProfile user={userData} />
      ) : (
        <UserProfile user={userData} />
      )}
    </div>
  );
}

export default App;
