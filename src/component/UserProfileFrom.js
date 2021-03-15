import React, { useState } from 'react';
import { useEffect } from 'react';
import Unsplash, { toJson } from "unsplash-js";


const UserProfileFrom = ({ id }) => {
    console.log(id)
    const unsplash = new Unsplash({
        accessKey: "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4",
    });

    const [userprofile, setUserprofile] = useState([]);

    useEffect(() => {
        unsplash.users
        .profile(userprofile)
        .then(toJson)
        .then((json) => {
            setUserprofile(json.results);
        });
    },[id]);
    

    return (

        <div class="profile" >
            {userprofile.map(user => 
            <div key={user.id}>
                <p class="profile-image" ><img src="${user.profile_image.medium}" class="profile-image" style="height:106px;width:106px" alt="Avatar"></img> <h2>${user.id}</h2></p>
                    <hr></hr>
                        <div>
                            <p><span>${user.total_photos}</span> photos</p>
                            <p><span>${user.followers_count}</span> Follow</p>
                            <p><span>${user.following_count}</span> Following</p>
                        </div>
                        <hr></hr>
                            <div>
                                <p><span>${user.name}</span>${user.bio}</p>
                            </div>
        </div>
        )};
      </div>


    );


};

export default UserProfileFrom;