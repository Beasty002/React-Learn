import ProfileCard from "./ProfileCard"

export const Profile = () => {
    return (
        <>
            <ProfileCard name="Bob" age={20} greeting={<div>
                <h1>Hello, Bob! keep up the good works</h1>
            </div>}>
                <p>Hobbies: gaming anime</p>
                <button>Contact</button>
            </ProfileCard>

        </>
    )
}