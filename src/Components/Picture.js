import React from 'react';
import '../styles.css';
import HeartIcon from "../svgIcons/heart.svg";


const Picture = ({src, alt}) => {
    return (
        <div className={"img-wrapper"}>
            <button className={"icon-wrapper heart-icon"}>
                <img
                    className={"icon"}
                    src={HeartIcon}
                    alt={'add to favorite heart icon'}
                />
            </button>
            <img
                className={"main-img"}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default Picture;