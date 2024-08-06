export const App = () => {
  //we cant return multiple elements at once(an error will be thrown) we need them to wrap them up in one container 
  // unlike html all single tags should be self closing tag like <img src = "url" />
  // returning multiple element we need to use small bracket ()
  // instead of returning multiple elements by inserting in div we can use <> at start and </> at end and insclude all the elements inside it

  return (<div>
    <h1>hello world</h1>
    <Card />
    <h2>This is a movie</h2>
  </div >);
};


const Card = () => {    //use PascalCase for naming components
  const value = "Hey";
  return (
    <h3>{value} from component {comp() + 8}</h3>   //using curly brackets we can use js like function (variables or functions or other js parts) inside the html
  )
}
const comp = () => {
  return 5;
}