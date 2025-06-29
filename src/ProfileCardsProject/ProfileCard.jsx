import PropTypes from 'prop-types';

function ProfileCard({name, age, IsMember, hobbies, onHobbyClick}) {
  return (
    <div className="profile-card">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h3>Status: {IsMember ? "Active Member" : "Guest"} </h3>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index} 
                     onClick = {() => onHobbyClick(hobby)}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  IsMember: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
}

export default ProfileCard;