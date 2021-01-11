import React from 'react'

const SocialButton = (props) => {
    return (
      <a href={props.href} target={props.accent} rel={props.rel} className="flex place-items-center rounded-full transition-all text-2xl p-3 no-underline text-white hover:bg-gray-700 md:text-base">
          {props.children}
      </a>
    )
}

export default SocialButton