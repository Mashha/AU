import React from 'react'
import SectionOne from '../components/SectionOne/SectionOne'
import SectionTwo from '../components/SectionTwo/SectionTwo'
import SectionThree from '../components/SectionThree/SectionThree'
import SectionFour from '../components/SectionFour/SectionFour'
import SectionFive from '../components/SectionFive/SectionFive'
import SectionSix from '../components/SectionSix/SectionSix'
import SectionSeven from '../components/SectionSeven/SectionSeven'
import Hero from '../components/Hero/Hero'


function Home() {
    return (
        <>
            <Hero />
            <SectionOne />
            <SectionTwo />
            {/* <SectionThree /> */}
            <SectionFour />
            <SectionFive />
            <SectionSix />
            {/* <SectionSeven /> */}
        </>
    )
}

export default Home