import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/drive-thumb.jpg'
import thumb02 from '../assets/images/thumbs/mediacenter-thumb.jpg'
import thumb03 from '../assets/images/thumbs/colorsteel-thumb.jpg'

import full01 from '../assets/images/fulls/drive.jpg'
import full02 from '../assets/images/fulls/mediacenter.jpg'
import full03 from '../assets/images/fulls/colorsteel.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Drive', description: 'Learning to drive? You\'ll need to know the official NZ Road Code. This platform got free video lessons, games and quizzes to help get your learner licence, restricted licence or full licence.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Education New Zealand - Media Center', description: 'Discover the stories and people behind New Zealand’s international education sector which prepares students for a global future.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Colorsteel', description: 'COLORSTEEL® protects the places New Zealanders live, work and play.'},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Lucas Frey - Front-end developer"
        const siteDescription = "This is just another portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi.<br />I'm Lucas, I code & build
                            user interfaces.</h2>
                        </header>
                        <p>From web component and responsive website to React and Javascript, check out what I have been working on recently.
                        Interested in performance optimisation, data analytics and every that can grow and improve user experience really.</p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
