import Card from "./components/Card"; //here we can use any name for the component, like instead of Card we can use placeholder ,container etc but the location must be correct 
//Best practice is to use same name as component // This is default export
import { Series } from "./components/Series";
import { Footer, UserName } from "./components/UserName";  //This is named export here we cant change the name
//we can have multiple named export but only one default export
//if there is default export and names export in a component then we can export as "Card , {Footer, UserName}"


export const App = () => {
  //we cant return multiple elements at once(an error will be thrown) we need them to wrap them up in one container 
  // unlike html all single tags should be self closing tag like <img src = "url" />
  // returning multiple element we need to use small bracket ()
  // instead of returning multiple elements by inserting in div we can use <> at start and </> at end and insclude all the elements inside it
  const age = 20
  let fName = "admin"
  let txt = "not admin"
  if (fName === "admin") txt = "You're the admin";
  //we cant use if else inside the js part of element in return statement instead we can use ternary , and operator , or operator



  // return (<div>
  //   <h1>hello world</h1>
  //   <Card />
  //   <h2>This is a movie</h2>
  //   <p>You are a{age >= 18 ? "Adult" : "Minor"}</p>
  //   <p>{txt}</p>
  //   <UserName />
  //   <Footer />
  // </div >);
  return (
    <>
      <Series />
    </>
  )
};





