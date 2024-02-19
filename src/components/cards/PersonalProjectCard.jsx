import React from "react";
import { Link } from "gatsby";

export default function PersonalProjectCard(props) {
    return (
        <Link
            style={{ "--accent": props.accent }}
            className="flex flex-col gap-6 p-6 relative rounded-3xl border border-white/15 bg-[#0c0c12] transition-all z-10 overflow-clip md:p-8 after:absolute after:inset-0 after:bg-[var(--accent)] after:opacity-0 after:transition-all hover-supported:hover:border-[var(--accent)] hover-supported:hover:after:opacity-15 active:scale-[0.97] active:border-[var(--accent)] focus-visible:border-[var(--accent)] focus-visible:outline-none"
            to={props.to}
        >
            {props.children}
        </Link>
    );
}
