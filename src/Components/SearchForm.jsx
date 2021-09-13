import React from 'react'
import { useArticleContext } from '../util/context'

const SearchForm = () => {
    const { query, setQuery, error } = useArticleContext()
    return (
        <form onSubmit={(e) => e.preventDefault} className="search-form">
            <h2>Search Articles</h2>
            <input 
            type="text"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)} />
            {error.show && <div className="error">{error.msg}</div>}
        </form>
            
        
    )
}

export default SearchForm
