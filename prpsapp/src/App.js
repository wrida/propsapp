import logo from './logo.svg';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import Picture from './technologie.jpg';
const App = () => {
    const userDetails = {
    fullName : 'warda ghanmi',
    bio : 'Née à 09/02/1981 à Sidi Bouzid , ayant mon Baccalaureat en 2000, ma Maitrise en 2004 en Gestion Ecomique et Sociale',
    profession : 'Web Developer'
  } 
  const handlerName =()=> {
  alert(userDetails.fullName)
  }
  
        return(
          <ProfileComponent userDetails={userDetails} handlerName={handlerName} >
          <div>
           <img style ={{display: 'flex',paddingLeft:300}} src ={Picture} width="250px" height="250px"/> 
          </div>
           </ProfileComponent>
        )
            }
       
           export default App
