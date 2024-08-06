export const App = () => {
  //we cant return multiple elements at once(an error will be thrown) we need them to wrap them up in one container 
  // unlike html all single tags should be self closing tag like <img src = "url" />
  // returning multiple element we need to use small bracket ()
  // instead of returning multiple elements by inserting in div we can use <> at start and </> at end and insclude all the elements inside it

  return (<div>
    <h1>hello world</h1>
    <Card />
    <Card />
    <Card />
    <h2>This is a movie</h2>
  </div >);
};


const Card = () => {    //use PascalCase for naming components
  return (
    <h3>Hello from  componenet</h3>
  )
}