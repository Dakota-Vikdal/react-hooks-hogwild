import {useState} from 'react'

function Tile({name, image, specialty, greased, weight, "highest medal achieved": highestMedalAchieved}) {

    const [click, setClick] = useState(true)

    function handleClick() {
        setClick(click => !click)
    }

    console.log(highestMedalAchieved)


    return(
        <div onClick={handleClick}>
            {click ? (
                <div className="pigTile ui eight wide column">
                    <ul>
                        <h1>{name}</h1>
                        <img src={image} alt={name}/>
                    </ul>
                </div>
                ) : (
                <div className="pigTile ui eight wide column">
                    <ul>
                        <h1>Specialty is {specialty}</h1>
                        <p>Greased: {greased ? 'Yeppers!' : 'Not yet!'}</p>
                        <p>Weight: {weight}</p>
                        <p>Highest Medal Achieved: {highestMedalAchieved}</p>
                    </ul>
                </div>
            )}
        </div>
    )
}


export default Tile