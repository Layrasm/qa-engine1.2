import React, { useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ImageUploader from '../images/ImageUploader';
import { Card, Image, Container} from 'semantic-ui-react';
import Leaderboard from './Leaderboard';


const MyProfile = (props) => {
  
  const { user } = useContext(AuthContext);
  
  
    useEffect(() => {
  
  
    }, []); 

  



  return (
    <>
    <br/>
    <Container style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{margin:"10px", width: "70%"}}>
              <Leaderboard/>
            </div>
            
      <Card 
        style={{
          width: "350px",
          // left: "20px",
          margin:"10px",
          fontFamily: "Roboto",
        }}
        >
          <Image src={user.image}/>
          <Card.Content textAlign="center">
          <h1>My Profile</h1>
            <h2>Name: {user.first_name} {user.last_name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Cohort: {user.cohort}</h2>
            
            <button>Edit Info</button>
            
          
            <br/>
            <br/>
            <br/>
            Add or update current photo (page will refresh)
            <ImageUploader userID={user.id}/>
          
          </Card.Content>
        </Card>
      </Container>
      
    </>
  );
};

export default MyProfile;
