import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbars/IndexNavbar'
import Header from '../components/Headers/indexHeader'
import Herohome from '../components/Headers/Herohome'
import Footer from '../components/Footers/indexFooter'
import FeaturesBlocks from '../components/FeatureBlocks'
import PresenterWanted from '../components/PresentWanted'
import Navbar2 from '../components/Navbars/Navbar'
import Section from '../components/Headers/section'
import Section2 from '../components/Headers/section2'
import Section3 from '../components/Headers/section3'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    // <div>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <Navbar/>
    //   <Header/>
    //   <Section/>
    //   <Section2/>
    //   <Section3/>
    //   <Footer/>
        
    
    // </div>

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Navbar />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <Herohome />
       
        <PresenterWanted />
        <div className="my-5">
        <Carousel/>
        </div>
       
        {/* <Carousel /> */}
        {/* <FeaturesBlocks />
        <PresenterWanted /> */}
        <div className="mt-12" />
        {/* <Cta /> */}
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <FeaturesWorld />
        <News />
        <Cta /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  )
}
