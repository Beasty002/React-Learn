//we cant use for loops in jsx , instead we use .map()
import seriesData from "./../api/seriesData.json"

export const Series = () => {
    return (
        <ul>
            {
                seriesData.map((curElem, idx) => { //whie using map dont forget to return elements 
                    return (
                        <li key={curElem.id}>
                            <div><img src={"https://media.istockphoto.com/id/586383746/photo/beautiful-young-businesswoman-with-crossed-hands-showing-stop-gesture.jpg?s=1024x1024&w=is&k=20&c=9ftLSjl9faleDF7soZAHH_QNeZAUyawcmAcJRwPImWk="} alt="" height="40%" width="40%" /></div>
                            <h2>Name: {curElem.name}</h2>
                            <h3>Rating: {curElem.rating}</h3>
                            <a href={curElem.watch_url}></a>
                            <button>Watch Now</button>
                        </li>
                    )
                })
            }

        </ul>

    )
}