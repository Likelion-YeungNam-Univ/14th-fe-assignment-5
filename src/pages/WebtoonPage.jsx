import React from 'react'
import WebtoonSection from '../components/WebtoonSection'
import Category from '../components/Category'
import Header from '../components/Header'

const WebtoonPage = () => {
    return (
        <div><Header />
            <Category />
            <WebtoonSection />
        </div>
    )
}

export default WebtoonPage