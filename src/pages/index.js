import React from 'react'
import { Link } from 'gatsby'

import '../assets/scss/main.scss'

import Helmet from 'react-helmet'
import ScriptTag from '../components/ScriptTag'
import Banner from '../components/Banner'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'
import ScriptFooter from '../components/ScriptFooter'
import Footer from '../components/Footer'

import '../assets/JS/script'


class HomeIndex extends React.Component {
    render() {

        return (

            <div>
            <Helmet
                    title="Demo React Application"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>    

            <ScriptTag />

            <Banner />
            
            <About />

            <Service />

            <Contact />

            <Footer />

            <ScriptFooter />
         </div>           
            
        )
    }
}

export default HomeIndex