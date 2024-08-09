const ProfileCard = (props) => { //we can also destructure here
    const { name, age, greeting, children } = props; //destructuring 
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>{greeting}</p>
            <div>{children  /*prop.children accesses the children from where it is called*/}</div>
            {/* passing jsx as props */}
        </>
    )
}
export default ProfileCard;