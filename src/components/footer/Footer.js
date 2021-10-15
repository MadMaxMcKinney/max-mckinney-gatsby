import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
	<div className="animate-fade-in-slow px-6 mt-10 mb-10 mx-auto flex flex-col justify-center md:mx-auto md:flex-row md:justify-end md:mt-32 xl:px-28">

        {/* Email */}
		<div className="text-xl text-center mb-10 font-bold md:text-2xl md:text-left md:mb-0" href="mailto:max@maxmckinney.com">max@maxmckinney.com</div>

	</div>
  )
}

export default Footer;