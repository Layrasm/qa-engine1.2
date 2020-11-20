import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {Form, Container} from "react-bootstrap";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Button} from "semantic-ui-react";




const Login = (props) => {
  const history = useHistory();
  const { handleLogin, setUser, authLoading, authErrors } = useContext(
    AuthContext
  );
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
    //api call here pass {email, password}
    handleLogin({ email: email.value, password: password.value }, history);
    // could put login fucntionalty here in Login as long as a use the setUser function from my provider, to set the user
    // try {
    //   let res = await axios.post("api/auth/sign_in", {
    //     email: email.value,
    //     password: password.value,
    //   });
    //   setUser(res.data.data);
    //   history.push("/");
    // } catch (err) {
    //   alert("error in logging in");
    //   debugger;
    // }
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
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control className="bg-light" placeholder="Enter Email" type="email" autoFocus {...email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control className="bg-light" placeholder="Enter Password" type="password" {...password} />
        </Form.Group>
        {authLoading ? (
          <Button disabled>Loading</Button>
        ) : (
          <Button color='vk' type="submit">Login</Button>
        )}
      </Form>
      </Container>
    </div>
  );
};
export default Login;