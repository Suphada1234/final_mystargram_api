import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from "unsplash-js";

const PhotoList = ({ id }) => {
    const unsplash = new Unsplash({
        accessKey: "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4",
    });
    const [photolist, setPhotolist] = useState([]);

    useEffect(() => {
        unsplash.users
            .profile(photolist)
            .then(toJson)
            .then((json) => {
                setPhotolist(json.results);
            });
    }, [id]);

    return (
        <div>
            {photolist.map(photo =>
                <div class="gallery-item" tabindex="0">

                    <img src="${photo.urls.raw}" class="gallery-image" alt=""></img>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span> Likes: </span>${photo.likes} </li>
                        </ul>
                    </div>

                </div>
            )};
        </div>

    )

}
export default PhotoList;