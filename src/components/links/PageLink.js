import React from "react";
import PropTypes from "prop-types";

const PageLink = (props) => {
    return (
        <a className={`transition-all filter hover:opacity-70 ${props.className}`} href={props.href}>
            {props.children}
        </a>
    );
};

PageLink.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
};

export default PageLink;
