import React from "react";
import UserProfileFrom from "../component/UserProfileFrom";
import PhotoList from "../component/PhotoListFrom";

const ShowProfile = (props) => {
    return (
        <main>
            <UserProfileFrom id={props.match.params.id} />
            <PhotoList id={props.match.params.id} />
        </main>
    );
};

export default ShowProfile;
