/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React from "react";

const EditProfile = ({user}) => {

  const onSubmit = () => {

    
  }


  return (
    <div>
    <form>
       <input type="text" defaultValue={user.name} />
       <input type="email" defaultValue={user.email} />
       <textarea defaultValue={user.bio}></textarea>
       <button onClick={onSubmit}> Save</button>
    </form>
    </div>
  );
};

export default EditProfile;
