import React from 'react';
import DotsIcon from "../svgIcons/dots.svg";

const Description = ({location, description, name}) => {
    return (
        <>
            <div className={"description"}>
                {location}
                <button className={"icon-wrapper dots-icon"}>
                    <img
                        className={"icon"}
                        src={DotsIcon}
                        alt={'see more button'}
                    />
                </button>
            </div>
            <h3>{description}</h3>
            <div className={"description"}>{name}</div>
        </>
    );
};

export default Description;