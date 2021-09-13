import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`
export const useFetch = (searchQuery) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: "" })
    const [articles, setArticles] = useState([])

    const fetchArticle = async (url) => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()

            if(data.Response === "True"){
                setArticles(data.Search || data)
                setError({show: false, msg: ""})
            }else{
                setError({show: true, msg: "error"})
            }
            setLoading(false)
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        console.log(`${API_ENDPOINT}${searchQuery}`)
        fetchArticle(`${API_ENDPOINT}${searchQuery}`)
    }, [searchQuery])

    return {loading, error, articles}

}