import React from 'react'

export default (props) => {
  return (
	<div className="flex justify-center items-center py-1 px-2 rounded-sm bg-white text-gray-900">
		<h6 className="uppercase text-sm font-medium tracking-wide">{props.text}</h6>
	</div>
  )
}