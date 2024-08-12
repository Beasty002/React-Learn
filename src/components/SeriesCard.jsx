export const SeriesCard = (props) => { //we can use any name instead of props , here props recieved the key and curElem and wrapped them inside it
    console.log(props);
    const btnStyle = {
        backgroundColor: 'aqua',
        color: 'white',
        border: "1px solid blue"
    }

    return (
        <li style={{ border: "1px solid gray", borderRadius: "10px", padding: "20px" /*way to write inline css we use camelcase instead of kebab case*/ }}>
            <div><img src={"https://media.istockphoto.com/id/586383746/photo/beautiful-young-businesswoman-with-crossed-hands-showing-stop-gesture.jpg?s=1024x1024&w=is&k=20&c=9ftLSjl9faleDF7soZAHH_QNeZAUyawcmAcJRwPImWk="} alt="" height="40%" width="40%" /></div>
            <h2>Name: {props.curElem.name}</h2>
            <h3>Rating: {props.curElem.rating}</h3>
            <a href={props.curElem.watch_url}></a>
            <button style={btnStyle}>Watch Now</button>
        </li>
    )
}