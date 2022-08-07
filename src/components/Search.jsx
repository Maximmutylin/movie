import React from 'react'
import { useState } from 'react'

const Search = (props) => {

    let [search, setSearch] = useState('');

    let [type, setType] = useState('all');

    function handleKey(event) {
        if (event.keyCode === 13) {
            props.func(search,type)
        }
    }

    function handleFilter(event) {
        setType(() => (type = event.target.dataset.type), () => {
            props.funcType(type, search)
        })

    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    placeholder='Search'
                    type="search"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(search = e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            <button className='btn search-btn' onClick={() => props.func(search, type)}>Search</button>
            <div className='radio-btn'>
                <p>
                    <label>
                        <input className="with-gap" name="group3" type="radio" data-type='all' onChange={handleFilter} checked={type === 'all'}  />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap" name="group3" type="radio" data-type='movie' onChange={handleFilter} checked={type === 'movie'} />
                        <span>Movies only</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap" name="group3" type="radio" data-type='series' onChange={handleFilter} checked={type === 'series'} />
                        <span>Series only</span>
                    </label>
                </p>
            </div>
        </div>
    )
}

export default Search