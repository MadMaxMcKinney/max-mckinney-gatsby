import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import PageNavButton from '../buttons/PageNavButton'
import DropdownButton from '../buttons/DropdownButton'

const Header = (props) => {

    return (
        <Navmenu className="grid place-items-center w-full mt-4 px-4 z-10 top-0 absolute animate-fade-in-fast">
            <div className="flex justify-between container">

            {/* Site Logo Container */}
            <div className="flex flex-row items-center justify-start">
                <Link to="/">
                    <StaticImage className="h-auto w-20" src="../../assets/img/max_transition_shapes.png" alt="Max McKinney Shape Logo"/>
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
                <li>
                    <DropdownButton/>
                </li>
            </div>
            </div>
        </Navmenu>
    )
}

const Navmenu = styled.div`
	height: 60px;
`

export default Header;
