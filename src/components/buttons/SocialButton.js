import React from 'react'
import {Link} from 'gatsby'

export const SocialButton = (props) => {
    return (
      <a href={props.href} target={props.accent} rel={props.rel} className="grid place-items-center rounded-full transition-all text-2xl p-3 no-underline text-white hover:bg-blueblack-500 md:text-base">
          {props.children}
      </a>
    )
}

export const SocialColorButton = (props) => {
    return (
      <a href={props.href} target={props.accent} rel={props.rel} className={`grid place-items-center transition-all text-2xl no-underline text-gray-300 ` + props.className}>
          {props.children}
      </a>
    )
}

export const SocialLinkButton = (props) => {
    return (
      <Link to={props.to} className="grid place-items-center rounded-full transition-all text-2xl p-3 no-underline text-white hover:bg-blueblack-500 md:text-base">
          {props.children}
      </Link>
    )
}