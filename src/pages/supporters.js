import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'
import {SupporterMilestoneRow} from '../components/page/SupporterMilestoneRow'
import CountUp from 'react-countup'

import w1 from '../assets/img/supporters/1000/MM_Support_Wallpaper_1.png'
import w2 from '../assets/img/supporters/1000/MM_Support_Wallpaper_2.png'
import w3 from '../assets/img/supporters/1000/MM_Support_Wallpaper_3.png'
import w4 from '../assets/img/supporters/1000/MM_Support_Wallpaper_4.png'
import w5 from '../assets/img/supporters/1000/MM_Support_Wallpaper_5.png'

import metaFeaturedImage from '../assets/img/website-meta-share-personal.png'

const description = "Thank you to all of my supporters! These wallpapers are created at every milestone we hit, it's the least I can do to say thank you."

const SupportersPage = ({data}) => {

    const [subCount, setSubCount] = useState(0)

    // Fetch the latest sub count and update state
    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCQNdi3oxWKsVw8-kA26PSpw&key=AIzaSyA-1UNliOvD3F9x2n54PM-ppnBJhDhM4cA")
            .then(res => res.json())
            .then(data => {
                // Convert to Number to match what the CountUp component needs
                let value = Number(data.items[0].statistics.subscriberCount)
                setSubCount(value)
            })
    })

    return (
    <PageGrid>

        <Helmet title={data.site.siteMetadata.title + ' | Supporters '}>
            <meta itemprop="name" content={data.site.siteMetadata.title + ' | Supporters '}/>
            <meta name="description" content={description} />
            <meta itemprop="description" content={description}/>
            <meta name="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>
            <meta itemprop="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>

            <meta name="twitter:title" content={data.site.siteMetadata.title + ' | Supporters'}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>

            <meta name="og:title" content={data.site.siteMetadata.title + ' | Supporters'}/>
            <meta name="og:description" content={description}/>
            <meta name="og:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>
        </Helmet>

        <LeftGradient className="animate-fade-in-slow"/>
        <RightGradient className="animate-fade-in-slow"/>

        <div className="mb-24 md:mb-60 flex flex-col items-center">
            <p className="text-9xl font-black mt-56 mb-14 text-center justify-self-center bg-gradient-to-b from-red-600 to-purple-500 bg-clip-text text-transparent animate-fade-in-fast"><CountUp end={subCount} separator="," duration="4"/> </p>
            <p className="text-3xl mb-8 font-bold text-center justify-self-center animate-fade-in">Thank you to all of my supporters.</p>
            <p className="text-xl max-w-3xl text-center justify-self-center animate-fade-in">I want to give back to my community for all that you’ve given to me. Every milestone we hit I’ll make some special wallpapers for everyone. Eventually I hope this page will be full of hundreds of wallpapers for the community!</p>
        </div>
        
        <div className="animate-fade-in-slow" id="SupporterContent">
            <SupporterMilestoneRow milestone="1,000 Subscribers" date="April 1st 2021">
                <WallpaperContainer href={w1}>
                    <StaticImage src="../assets/img/supporters/1000/MM_Support_Wallpaper_1.png" alt="Wallpaper 1"/>
                </WallpaperContainer>
                <WallpaperContainer href={w2}>
                    <StaticImage src="../assets/img/supporters/1000/MM_Support_Wallpaper_2.png" alt="Wallpaper 2"/>
                </WallpaperContainer>
                <WallpaperContainer href={w3}>
                    <StaticImage src="../assets/img/supporters/1000/MM_Support_Wallpaper_3.png" alt="Wallpaper 3"/>
                </WallpaperContainer>
                <WallpaperContainer href={w4}>
                    <StaticImage src="../assets/img/supporters/1000/MM_Support_Wallpaper_4.png" alt="Wallpaper 4"/>
                </WallpaperContainer>
                <WallpaperContainer href={w5}>
                    <StaticImage src="../assets/img/supporters/1000/MM_Support_Wallpaper_5.png" alt="Wallpaper 5"/>
                </WallpaperContainer>
            </SupporterMilestoneRow>
        </div>    

    </PageGrid>
    )
}

const WallpaperContainer = (props) => (
    <a className="border border-transparent rounded overflow-hidden transform group relative hover:-translate-y-1 hover:border-white hover:shadow-cardHighlight transition-all duration-200" href={props.href} target="_blank" rel="noopener noreferrer">
        <p className="rounded-md bg-white text-gray-900 text-xs font-bold grid place-items-center px-2 py-1 absolute top-2 right-2 z-10">sRGB</p>
        <p className="opacity-0 text-lg font-bold absolute flex justify-center items-center w-full h-full text-center z-10 group-hover:opacity-100 transition-all">Download</p>
        {props.children}
    </a>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const RightGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 680px;
    background: radial-gradient(100.18% 154.99% at 93.96% -65.99%,#ff3e03c4 0%,rgba(0,0,0,0) 97%);
    z-index: -5;
`

const LeftGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 680px;
    background: radial-gradient(107.65% 155.65% at 11.46% -35.65%,#A866FD 0%,rgba(0,0,0,0) 74%);
    z-index: -5;
`

export default SupportersPage

export const query = graphql`
query supportersPageQuery {
    site {
        siteMetadata {
            title
            siteUrl
        }
    }
}
`