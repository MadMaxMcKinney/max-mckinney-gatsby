import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import PageNavButton from '../buttons/PageNavButton'

const Header = (props) => {

    return (
        <header className="h-16 grid place-items-center w-full mt-4 px-6 z-10 top-0 absolute animate-fade-in-fast">
            <div className="flex justify-between mx-auto w-full xl:max-w-8xl">

            {/* Site Logo Container */}
            <div className="flex flex-row items-center justify-start">
                <Link className='transition-opacity hover:opacity-80' to="/">
                    <StaticImage className="h-auto w-12" src="../../assets/img/max_word_mark.png" alt="Max McKinney Logo"/>
                </Link>
            </div>

            <div className="grid grid-flow-col gap-2 justify-end items-center list-none md:gap-4">
                {/* Page Tabs */}
                <li id="professionalProjects">
                    <Link to="/">
                        <PageNavButton isActivePage={props.location.pathname === "/" ? true : false}>
                            <p>Work</p>
                        </PageNavButton>
                    </Link>
                </li>
                <li id="personalProjects">
                    <Link to="/personal">
                        <PageNavButton isActivePage={RegExp("\/personal.?").test(props.location.pathname) ? true : false}>
                            <p>Personal</p>
                        </PageNavButton>
                    </Link>
                </li>
            </div>
            </div>
        </header>
    )
}

export default Header;
