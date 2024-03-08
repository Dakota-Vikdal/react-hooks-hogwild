import Tile from './Tile'
import {useState} from 'react'


function TileList({hogs}) {
    
    const [filterGreased, setFilterGreased] = useState(false)
    const [sortBy, setSortBy] = useState('name')

    const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

    function toggleGrease() {
        setFilterGreased(filterGreased => !filterGreased)
    }

    const sortHogs = (criteria) => {
        setSortBy(criteria);
    };

    const sortedHogs = [...filteredHogs].sort((hog1, hog2) => {
        if (sortBy === 'name') {
            return hog1.name.localeCompare(hog2.name)
        } else if (sortBy === 'weight') {
            return hog1.weight - hog2.weight
        }
    })


    const hog = sortedHogs.map(hogObj => (
        <Tile 
            key={hogObj.name}
            {...hogObj}
        />
    ))
    

    return(
        <div>
            <button className='btn' onClick={toggleGrease}>
                {filterGreased ? 'Show all hogs' : 'Filter greased hogs'}
            </button>
            <button className='btn' onClick={() => sortHogs('name')}>
                Sort by Name
            </button>
            <button className='btn' onClick={() => sortHogs('weight')}>
                Sort by Weight
            </button>
            <div className="ui grid container">
                {hog}
            </div>
        </div>
    )
}

export default TileList