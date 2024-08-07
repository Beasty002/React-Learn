const Card = () => {    //use PascalCase for naming components
    const value = "Hey";
    return (
        <h3>{value} from component {comp() + 8}</h3>   //using curly brackets we can use js like function (variables or functions or other js parts) inside the html
    )
}
const comp = () => {
    return 5;
}
export default Card;