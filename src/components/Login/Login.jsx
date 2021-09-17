import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder={"Login"} />
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder={"Password"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
        Remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginRexuxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginRexuxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
