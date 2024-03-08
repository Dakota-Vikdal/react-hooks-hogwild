import Tile from './Tile'
import {useState} from 'react'


function TileList({hogs}) {
    
    const [filterGreased, setFilterGreased] = useState(false)

    const filteredHog = hogs.filter(hogObj => {
        return hogObj.greased === filterGreased
    })
    
    function handleClick() {
        setFilterGreased(filterGreased => !filterGreased)
    }



    const hog = filteredHog.map(hogObj => (
        <Tile 
            key={hogObj.name}
            {...hogObj}
        />
    ))
    

    return(
        <div>
            <button className='btn' onClick={handleClick}>
                {filterGreased ? 'Show all hogs' : 'Filter greased hogs'}
            </button>
            <div className="ui grid container">
                {hog}
            </div>
        </div>
    )
}

export default TileList