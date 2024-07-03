import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProfileDetails() {
  const  detailsId = useParams();
  const [profileData, setProfileData] = useState(null);
console.log(detailsId.id)
  useEffect(() => {
    async function fetchProfileDetails() {
      try {
        let rawdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${detailsId.id}`);
        let profileData = await rawdata.json();
        setProfileData(profileData);
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    }

    fetchProfileDetails();
  }, [detailsId]);

  if (!profileData) {
    return <p>Loading profile details...</p>;
  }

  return (
    <div className='App'>
        <div className='one'>
      <h2>Profile Details</h2>
      <h3>Title: {profileData.title}</h3>
      <p>Body: {profileData.body}</p>
      </div>
    </div>
  );
}

export default ProfileDetails;
