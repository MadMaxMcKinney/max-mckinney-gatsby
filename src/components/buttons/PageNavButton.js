import React from 'react'
import { MHeading06 } from '../typography'
import {ArrowSmallRightIcon} from '@heroicons/react/20/solid'

const PageNavButton = (props) => {

    let activeColorClass = props.isActivePage ? "text-white" : "text-gray-400"

    return (
      <MHeading06 className={`${activeColorClass} grid grid-flow-col gap-2 text-sm font-bold place-items-center transition-all group hover-supported:hover:opacity-70`}>
          {props.children} <ArrowSmallRightIcon className="w-4 h-4 mr-2 transform translate-y-px hover-supported:group-hover:animate-pulse-right"></ArrowSmallRightIcon>
      </MHeading06>
    )
}

export default PageNavButton