//we cant use for loops in jsx , instead we use .map()
import seriesData from "./../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"

export const Series = () => {
    return (
        <ul className="container">
            {
                seriesData.map((curElem) => { //whie using map dont forget to return elements  if single line of code no need
                    return (<SeriesCard key={curElem.id} curElem={curElem} />) //PASSING THE PROPS
                    //props wraps all the sent data in a container here key and curElem are both wraped in a container and sent 
                })
            }

        </ul>

    )
}