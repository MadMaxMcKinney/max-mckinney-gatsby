import React from "react";
import { Link } from "gatsby";
import { MHeading05 } from "../typography";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const ReadMoreButton = (props) => {
    return (
        <Link
            to={props.link}
            accent={props.accent}
            style={{ "--accentColor": props.accent }}
            className={`flex w-fit gap-2 group bg-[#0C0C12] items-center justify-center rounded-md px-4 py-2 border border-solid border-white/20 transition transform shadow-red-500/10 shadow-xl hover:bg-[var(--accentColor)] hover:border-white active:scale-95`}
        >
            <MHeading05>{props.children}</MHeading05>
            <ArrowRightIcon className="w-4 h-4 group-hover:animate-pulse-right"></ArrowRightIcon>
        </Link>
    );
};

export default ReadMoreButton;
