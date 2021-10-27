import React from 'react'
import PropTypes from 'prop-types'
const Profile = (props) => {
    console.log(props)
    return (
        <div>
          <h1 style ={{color: 'red', fontSize:50,textAlign:'center'}}>{props.userDetails.fullName}</h1>
         <h2 style ={{color: 'brown', fontSize:30,textAlign:'center'}}> {props.userDetails.profession}</h2>  
          {props.children}{props.handlerName()}<br/>
          <h3 style ={{color: 'blue', fontSize:20,textAlign:'center'}}>{props.userDetails.bio}</h3> 
        </div>

    )
}
Profile.propTypes = {
    userDetails: PropTypes.object,
  }
  Profile.defaultProps = {
  fullName: 'Edite',
  bio: 'née à la France, ayant le Doctorat en Psy',
  Profession: 'Professeur'
  }

export default Profile
