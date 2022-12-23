import React from 'react'
import {Link} from 'gatsby'
import {MHeading02} from '../components/typography'
 
const NotFoundPage = () => (
  <div className='page-grid animate-fade-in'>
    <MHeading02 className="mt-44">🤖 The website bot failed to find this page</MHeading02>
	<p className='mt-4'>If you can't find what you are looking for feel free to contact me at <a className='underline' href="mailto:hello@maxmckinney.com">hello@maxmckinney.com</a></p>
	<Link className='mt-4 px-4 py-2 bg-white rounded text-black w-fit transition-all hover:bg-slate-200' to="/">Return to homepage</Link>
  </div>
)

export default NotFoundPage