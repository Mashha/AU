import React from 'react'
import Header from '../components/Header/Header'
import SectionOne from '../components/SectionOne/SectionOne'
import SectionTwo from '../components/SectionTwo/SectionTwo'
import SectionThree from '../components/SectionThree/SectionThree'
import SectionFour from '../components/SectionFour/SectionFour'
import SectionFive from '../components/SectionFive/SectionFive'
import SectionSix from '../components/SectionSix/SectionSix'
import SectionSeven from '../components/SectionSeven/SectionSeven'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <Footer />
        </>
    )
}

export default Home