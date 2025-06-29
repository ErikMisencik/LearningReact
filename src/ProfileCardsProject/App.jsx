
import './App.css'
import MyButton from './MyButton'
import ProfileCard from './ProfileCard'

const person = {name: "Erik", age: 24};

const handleHobbyClick = (hobby) => {
  alert(`You clicked on: ${hobby}`);
}

const johnProfile = {
  name: "John",
  age: 60,
  IsMember: false,
  hobbies: ['Cooking', 'Traveling', 'Photography'],
  onHobbyClick: handleHobbyClick
}

const slavkoProfile = {
  name: "Slavko",
  age: 22,
  IsMember: true,
  hobbies: ['Swimming', 'Cycling', 'Painting'],
  onHobbyClick: handleHobbyClick
}

function App() {

  return (
    <>
    <div>
      <div className = "greetings"> 
        <h1>Hello</h1>
      </div>
        <div className="card-container">
          <ProfileCard name = {person.name} 
                       age = {person.age} IsMember = {true} 
                       hobbies = {['Reading', 'Gaming', 'Hiking']}
                       onHobbyClick = {handleHobbyClick} />
          <ProfileCard {...johnProfile} />
          <ProfileCard {...slavkoProfile}  />
        </div>
    </div>
    </>
  )
}




export default App
