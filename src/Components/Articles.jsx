import React from 'react'
import { useArticleContext } from '../util/context'

const Articles = () => {
    const {articles, loading} = useMovieContext()
    if(loading){
        return <div className="loading"></div>
    }
    console.log(articles)
    return (
        <section className="articles">
        
        </section>
    )
}

export default Articles
