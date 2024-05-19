import React from 'react'
import SectionOne from '../components/SectionOne/SectionOne'
import SectionTwo from '../components/SectionTwo/SectionTwo'
import SectionThree from '../components/SectionThree/SectionThree'
import SectionFour from '../components/SectionFour/SectionFour'
import SectionFive from '../components/SectionFive/SectionFive'
import SectionSix from '../components/SectionSix/SectionSix'
import SectionSeven from '../components/SectionSeven/SectionSeven'
import Hero from '../components/Hero/Hero'
import { useIntl } from 'react-intl';


function Home() {
    const { formatMessage } = useIntl();
    return (
        <>
        <h1>{formatMessage({ id: 'home.title' })}</h1>
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