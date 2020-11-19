import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Form, Input, Button, Container} from "react-bootstrap";

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
  if (authLoading) {
    return (
      <>
        <p>loading</p>
      </>
    );
  }

  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <input type="text" autoFocus {...email}/>
        </Form.Group>
        <br/>
        <Form.Group>
          <input type="text" {...firstName} />
        </Form.Group>
        <br/>
        <Form.Group>
          <input type="text" {...lastName} />
        </Form.Group>
        <br/>
        <Form.Group> 
          <input type="text" {...cohort} />
        </Form.Group>
        <br/>
        <Form.Group>
          <input type="text" {...password} />
        </Form.Group>
        <br/>
        <Form.Group>
          <input  type="text"{...passwordConfirmation} />
        </Form.Group>
        <br/>
        
        {/* <p>{firstName.label}</p>
        <input  {...firstName} />
        <p>{lastName.label}</p>
        <input  {...lastName} />
        <p>{cohort.label}</p>
        <input  {...cohort} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <p>{passwordConfirmation.label}</p>
        <input type="password" {...passwordConfirmation} /> */}
        {authLoading ? (
          <Button disabled> spinner goes here</Button>
        ) : (
          <Button variant="primary" type="submit">Register</Button>
        )}
      </Form>
    </div>
  );
};
export default Register;