export const UserName = () => {
    let name
    let pkr = "pkr"
    //the and operator gives the value on the right side if the condition on the left is true else gives the value of the left if it exists
    // the or operator give the value on the left if it is right or else gives the one one on the right
    return (<>
        <h1>Your name is {name || "John Doe"}</h1>

        <h3>You are from {pkr && "pokhara"}</h3>
    </>
    )
}
export const Footer = () => {
    return (<p>"@copyright Beasty"</p>)
}