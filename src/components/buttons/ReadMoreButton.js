import React from "react";
import { Link } from "gatsby";
import { MHeading05 } from "../typography";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const ReadMoreButton = (props) => {
    return (
        <Link
            to={props.link}
            accent={props.accent}
            style={{'--accentColor': props.accent}}
            className={`flex w-fit gap-2 group bg-gray-600 items-center justify-center rounded px-4 py-2 border border-solid border-transparent transition transform hover:bg-[var(--accentColor)] hover:border-white active:scale-95`}
        >
            <MHeading05>{props.children}</MHeading05>
            <ArrowRightIcon className="w-4 h-4 group-hover:animate-pulse-right"></ArrowRightIcon>
        </Link>
    );
};

export default ReadMoreButton;
