export const SeriesCard = (props) => { //we can use any name instead of props , here props recieved the key and curElem and wrapped them inside it
    console.log(props);

    return (
        <li>
            <div><img src={"https://media.istockphoto.com/id/586383746/photo/beautiful-young-businesswoman-with-crossed-hands-showing-stop-gesture.jpg?s=1024x1024&w=is&k=20&c=9ftLSjl9faleDF7soZAHH_QNeZAUyawcmAcJRwPImWk="} alt="" height="40%" width="40%" /></div>
            <h2>Name: {props.curElem.name}</h2>
            <h3>Rating: {props.curElem.rating}</h3>
            <a href={props.curElem.watch_url}></a>
            <button>Watch Now</button>
        </li>
    )
}