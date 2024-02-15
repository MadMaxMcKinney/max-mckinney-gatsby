import React from "react";

export default (props) => {
    const styleClasses = {
        primary: {
            backgroundColor: "#FF616126",
            color: "#c31919",
        },
        themed: {
            backgroundColor: props.theme + "26",
            color: props.theme,
        },
    };

    return (
        <div className={`flex justify-center items-center py-1 px-2 rounded-md`} style={styleClasses[props.type]}>
            <h6 className="uppercase text-sm font-medium tracking-wide">{props.text}</h6>
        </div>
    );
};
