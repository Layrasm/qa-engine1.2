import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Form, Container} from "react-bootstrap";
import {Button} from "semantic-ui-react";

const Register = (props) => {
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const firstName = useFormInput("","First Name")
  const lastName = useFormInput("", "Last Name")
  const cohort = useFormInput("", "Cohort")

  const passwordConfirmation = useFormInput("", "Password Confirmation");
  const { handleRegister, authLoading, authErrors } = useContext(AuthContext);
  const history = useHistory();
  // history.push('/pathname') => will take us to route
  const handleSubmit = (e) => {
    //need to do this
    e.preventDefault();
    // maybe check valid email, etc
    if (password.value !== passwordConfirmation.value) {
      alert("passwords don not match");
    } else {
      // regisiter user
      handleRegister(
        {
          email: email.value,
          password: password.value,
          first_name: firstName.value,
          last_name: lastName.value,
          cohort: cohort.value,
        },
        history
      );
    }
  };
  
  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}
      <Container style={{width:"55%"}}>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control className="bg-light" placeholder="Enter Email" type="email" autoFocus {...email}/>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control className="bg-light" placeholder="Enter First Name" type="text" {...firstName} />
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="bg-light" placeholder="Enter Last Name" type="text" {...lastName} />
        </Form.Group>
        
        <Form.Group> 
          <Form.Label>Cohort</Form.Label>
          <Form.Control className="bg-light" defaultValue="...Cohort" as="select" {...cohort}>
            <option>Winter</option>
            <option>Spring</option>
            <option>Summer</option>
            <option>Fall</option>
          </Form.Control>
        </Form.Group>
       
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control className="bg-light" placeholder="Enter Password" type="password" {...password} />
        </Form.Group>
       
        <Form.Group>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control className="bg-light" placeholder="Confirm Password" type="password"{...passwordConfirmation} />
        </Form.Group>
      
        {authLoading ? (
          <Button disabled>Registering</Button>
        ) : (
          <Button color='vk' variant="primary" type="submit">Register</Button>
        )}
      </Form>
      </Container>
    </div>
  );
};
export default Register;